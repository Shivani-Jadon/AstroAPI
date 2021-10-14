const Question = require("../models/question");

// controller method to create question category
module.exports.addQuestionCategory = function(req, res ) {
    Question.create(req.body, 
        function(err, newQuestion) {
            if(err) {
                console.log(err);
                return res.status(400).json({
                    httpStatus : "Bad request",
                    httpStatusCode : 400,
                    message : "Error in creating message category",
                    error : err.message
                })
            }
            
            return res.status(200).json({
                httpStatus : "OK",
                httpStatusCode :200,
                success :true,
                message :"Question category created successfully.",
                apiName :"Create categories.",
                data_added : newQuestion
                
            })
        })
}

// controller method to fetch all questions
module.exports.fetchAllQuestions = async function (req, res) {
    try {
        let questionData = await Question.find({}).exec();
        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode :200,
            success :true,
            message :"Question categories fetched successfully.",
            apiName :"Get all categories.",
            data : questionData
        })
    } catch(err) {
        return res.status(400).json({
            httpStatus : "error",
            httpStatusCode : 400,
            message : "Error in fetching questions category",
            error : err.message
        })
    }
}

// controller method to fetch question based on category
module.exports.fetchQuestion = async function(req, res) {
    try {
        let categoryName = await req.query['name'];
        let questionData = await Question.findOne({name : categoryName});

        if(!questionData) {
            return res.status(400).send({
                httpStatus : "bad request",
                httpStatusCode : 400,
                error : "Question for this category does not exist"
            })
        }

        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode :200,
            success :true,
            message :"Question for given category fetched successfully.",
            apiName :"Get category",
            data : {
                questionData
            }
        })

    } catch(err) {
        return res.status(400).json({
            httpStatus : "bad request",
            httpStatusCode : 400,
            message : err.message
        })
    }
}

// controller method to add suggestions to existing categories
module.exports.addSuggestions = function(req, res ) {
    try {
        const categoryName = req.query['name'];
        const suggestion = req.body.suggestion;
        Question.findOneAndUpdate({name : categoryName},
            {"$push" : {suggestions : suggestion}}, {new : true} , function(err, updatedQuestion){
                if(err) {
                    return res.status(204).json({
                        httpStatus : "no content",
                        httpStatusCode : 204,
                        message : "Question for this category does not exist"
                    })
                }

                return res.status(200).json({
                    httpStatus : "OK",
                    httpStatusCode :200,
                    success :true,
                    message :"Question suggestion for this category updated successfully.",
                    apiName :"Add suggestion",
                    updated_data : updatedQuestion
                })
            })

    } catch(err) {
        return res.status(400).json({
            httpStatus : "error",
            httpStatusCode : 400,
            message : "Error in adding suggestions",
            error : err.message
        })
    }
}

// controller function to remove a category
module.exports.removeCategory = async function(req, res) {
    try {
        const categoryName = req.query['name'];
        await Question.findOneAndDelete({name : categoryName});

        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode :200,
            success :true,
            message :`Question ${categoryName} category removed successfully.`,
            apiName :"Remove question"
        })
    } catch(err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}