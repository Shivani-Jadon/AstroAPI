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
           return;
       } 

       return res.status(200).send("Horoscope data saved");
    }
    )
};

module.exports.fetchHoroscope = async function(req, res) {

    // fetching all the sunsign's horoscope
    try{
        let horoscopeData = await Horoscope.find({}).exec();
        return res.status(200).send(horoscopeData);
    }catch(err){
        return res.sendStatus(err.status);
    }
   
}


module.exports.updateHoroscope = async function(req, res) {
    // getting data from query params of request 
    let sunsign = await req.query['name'];
    // updating the content for the given sunsign
    await Horoscope.findOneAndUpdate({name : sunsign}, {content : req.body.content});
    return res.status(200).send("content updated ");
}