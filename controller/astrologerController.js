const Astrologer = require("../models/astrologer");

// controller method to create astrologer entry
module.exports.addAstrologer = function(req, res) {
    Astrologer.create({
        urlSlug : req.body.urlSlug,
        namePrefix : req.body.namePrefix,
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        aboutMe : req.body.aboutMe,
        profilePicUrl : req.body.profilePicUrl,
        experience : req.body.experience,
        languages : req.body.languages,
        minimumCallDuration : req.body.minimumCallDuration,
        minimumCallDurationCharges : req.body.minimumCallDurationCharges,
        additionalPerMinuteCharges : req.body.additionalPerMinuteCharges,
        isAvailable : req.body.isAvailable,
        rating : req.body.rating,
        skills : req.body.skills,
        isOnCall : req.body.isOnCall,
        images : {
            medium : {
                imageUrl : req.body.images.medium.imageUrl,
                id : req.body.images.medium.id
            },
            large : {
                imageUrl : req.body.images.large.imageUrl,
                id : req.body.images.large.id
            }
        },
        availability : {
            days : req.body.days,
            slot : {
                from : req.body.from,
                to : req.body.to
            }
        }
    },
    function(err, newAstrologer){
       if(err){
           console.log("Error in adding astrologer", err);
           return res.status(406).end(err.message);
       } 

       return res.status(200).send("Astrologer data saved " + newAstrologer);
    }
    )
}


// controller method to fetch astrologers data
module.exports.fetchAstrologers = async function(req, res) {
    try{
        let astrologerData = await Astrologer.find({}).exec();
        return res.status(200).send(astrologerData);
    }catch(err) {
        return res.sendStatus(err.status);
    }
    
}


// controller method to update astrologer data
module.exports.updateAstrologer = async function(req, res) {
    try {
        let astrologer =  await req.query['urlSlug'];
        let newValues = await req.body;
        let data = await Astrologer.findOneAndUpdate({urlSlug: astrologer}, newValues );

        return res.status(200).send("content updated");
    }
    catch(err) {
        return res.status(400).end(err.message);
    }
}


// controller to delete astrologer data
module.exports.removeAstrologer = async function(req, res) {
    try {
        let astrologer =  await req.query['urlSlug'];
        await Astrologer.findOneAndDelete({urlSlug: astrologer});

        return res.status(200).send("astrologer removed " + astrologer);
        
    } catch(err) {
        return res.status(400).end(err.message);
    }
}