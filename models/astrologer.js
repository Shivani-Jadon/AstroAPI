const mongoose = require("mongoose");

const astrologerSchema = new mongoose.Schema({
    urlSlug : {
        type : String,
        unique : true
    },
    namePrefix : {
        type : String
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    aboutMe : {
        type : String,
        default : "This is about me"
    },
    profilePicUrl : {
        type : String
    },
    languages : {
        type : [String]
    },
    minimumCallDuration : {
        type : Number,
        default : 5
    },
    minimumCallDurationCharges : {
        type : Number,
        default : 50
    },
    additionalPerMinuteCharges : {
        type : Number,
        default : 10
    },
    isAvailable : {
        type : Boolean,
        default : true
    },
    rating : {
        type : Number
    },
    skills : {
        type : [String]
    },
    isOnCall : {
        type : Boolean,
        default : false
    },
    images : {
      large : {
         imageUrl : { type : String },
         id : { type : Number }
      },
      medium : {
         imageUrl : { type : String },
         id : { type : Number }
      }
    },
    availability : {
      days : {
          type : [String],
          default : ["MON","TUE","WED","THUR","FRI"]
      },
      slot : {
         from : {
            type : Date
         },
         to : {
            type : Date
         }
      }
   }
})

const Astrologer = mongoose.model("AstrologerModel", astrologerSchema);
module.exports = Astrologer;