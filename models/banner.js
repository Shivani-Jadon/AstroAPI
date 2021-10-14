const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
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
        landingUrl : {
            type : String,
            default : "www.astrotak.com/report"
        },
        orderType : {
            type : String
        },
        metaData : {
            productCode : {
                type: String, 
                min : 2,
                required : true
            },
            productName : {
                type : String
            },
            professionalSlug : {
                type : String
            }
         },
         images :{
            medium : {
                imageUrl : { type : String },
                id : { type : Number }
            }
         }
    
})

const Banner = mongoose.model("BannerModel", bannerSchema);
module.exports = Banner;