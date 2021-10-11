const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question : [{
        id : {
            type : Number,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true,
            unique : true
        },
        description : {
            type : String,
            default : undefined
        },
        price : {
            type : Number,
            default : 99.0
        },
        suggestions : {
            type : [String]
        }
    }]
});

const Question = mongoose.model("QuestionModel" , questionSchema);
module.exports = Question;