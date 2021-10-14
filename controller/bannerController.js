const Banner = require("../models/banner");

// controller function to add banner schema
module.exports.addBannerScheme = function(req, res) {
    Banner.create(
        req.body,
        function(err, newBannerScheme) {
            if(err) {
                console.log(err);
                return res.status(400).json({
                    httpStatus : 400,
                    message : "Error in addind new scheme"
                })
            }

            return res.status(200).json({
                httpStatus : "OK",
                httpStatusCode : 200,
                success : true,
                message :"Banner scheme added successfully",
                apiName :"Add new Banner",
                data : {
                    newBannerScheme
                }
            });
        }
    )
}

// controller function for fetching banner schemes
module.exports.fetchBannerSchemes = async function(req, res) {
    try {
        let bannerData = await Banner.find({}).exec();
        return res.status(200).json({
            httpStatus : "OK",
            httpStatusCode : 200,
            success : true,
            message :"Banners fetched successfully",
            apiName :"Fetch Banner",
            data : {
                bannerData
            }
        })
    }
    catch(err) {
        console.log(err);
        return res.status(400).json({
            httpStatus : "error",
            httpStatusCode : 400,
            message : "Error in fetching new scheme"
        })
    }
}

// controller function to delete banner scheme
module.exports.removeBannerScheme = async function(req, res) {
    try {
        let schemeName =  await req.query['name'];
        await Banner.findOneAndDelete({name : schemeName});

        return await res.status(200).send("Banner Scheme deleted : " + schemeName);
    }catch(err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}