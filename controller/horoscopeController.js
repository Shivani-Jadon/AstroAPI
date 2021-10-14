const Horoscope = require("../models/horoscope");

module.exports.createHoroscope = function(req, res) {
    Horoscope.create({
        name : req.body.name,
        date : req.body.date,
        img : req.body.img,
        images : {
            small : {
                imageUrl : req.body.images.small.imageUrl,
                id : req.body.images.small.id
            },
            medium : {
                imageUrl : req.body.images.medium.imageUrl,
                id : req.body.images.medium.id
            },
            large : {
                imageUrl : req.body.images.large.imageUrl,
                id : req.body.images.large.id
            }
        },
        urlSlug : req.body.urlSlug,
        content : req.body.content
    },
    function(err, newHoroscope){
       if(err){
           console.log("Error in creating horoscope", err);
           return res.status(406).json({
            httpStatus :"OK",
            httpStatusCode :200,
            success :true,
            message :"horoscope added successfully",
            apiName :"Create horoscopes",
            data_added : newHoroscope
        });;
       } 

       return res.status(200).send("Horoscope data saved");
    }
    )
};

module.exports.fetchHoroscope = async function(req, res) {

    // fetching all the sunsign's horoscope
    try{
        let horoscopeData = await Horoscope.find({}).exec();
        return res.status(200).json({
            httpStatus :"OK",
            httpStatusCode :200,
            success :true,
            message :"fetched successfully",
            apiName :"Get all daily horoscopes",
            data : horoscopeData
        });
    }catch(err){
        return res.status(400).end(err.message);
    }
   
}


module.exports.updateHoroscope = async function(req, res) {
    // getting data from query params of request 
    let sunsign = await req.query['name'];
    // updating the content for the given sunsign
    await Horoscope.findOneAndUpdate({name : sunsign}, {content : req.body.content});
    return res.status(200).send("content updated ");
}