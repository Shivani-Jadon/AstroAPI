const mongoose = require('mongoose')

const horoscopeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    date : {
        type : String,
        required : true,
        min : 12,
        max : 15
    },
    img : {
        type : String
    },
    images : {
     small : {
        imageUrl : {type : String},
        id : {type : Number}
    },
    large : {
        imageUrl : {type : String},
        id : {type : Number}
    },
    medium : {
        imageUrl : {type : String},
        id : {type : Number}
    }
    },
    urlSlug : {
        type : String,
        default : "daily-horoscope"
    },
    content : {
        type : String
    }
});

const Horoscope = mongoose.model("HoroscopeModel", horoscopeSchema);
module.exports = Horoscope;