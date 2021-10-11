const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name : {
        type : String,
        default : "Horoscope"
    },
    productCode : {
        type : String,
        min : 2,
        required : true
    },
    imageUrl : {
        type : String,
        default : "horoscope.webp"
    },
    description : {
        type : String
    },
    availableLanguages : {
        type : [String]
    },
    indepthPoints : {
        type : [String]
    },
    price : {
        type : Number,
        min : 251,
        max : 5000
    },
    offerPrice : {
        type : Number,
        default : function () {
            return (this.price/21) * 100;
        }
    }
});

const reportSchema = new mongoose.Schema({
    services : {
        trype : [serviceSchema],
        default : undefined
    }
});

const Report = mongoose.model("ReportModel" , reportSchema);
module.exports = reportSchema;
