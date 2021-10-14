const Report = require("../models/report");
const report = new Report;

// controller method to create new report
module.exports.createReport = function(req, res) {
    let data = req.body;
    Report.create(req.body  ,
    function(err, newReport) {
        if(err) {
            console.log("error in creating new report ", err);
            return res.status(400).send(err.message);
        }

        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode :200,
            success :true,
            message :"Services added successfully.",
            apiName :"Add new service.",
            new_data :{
                service : newReport
            }
        })
    }
    )
}

// controller method to fetch reports
module.exports.fetchReports = async function(req, res) {
    try{
        let reportData = await Report.find({}).exec();
        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode :200,
            success :true,
            message :"Services fetched successfully.",
            apiName :"Get all services.",
            data :{
                services : reportData
            }
        });
    }
    catch(err) {
        console.log(err);
        return res.status(400).end(err.message);
    }
}


// controller method to delete report
module.exports.deleteReport = async function(req, res) {
    try {
        let reportName = await req.query['name'];
        await Report.findOneAndDelete({name : reportName});

        return res.status(200).send("Report deleted : " + reportName);
    }catch (err) {
        console.log(err);
        return res.status(400).end(err.message);
    }
}