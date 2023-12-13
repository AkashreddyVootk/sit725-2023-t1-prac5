let collection = require('../models/iphone');

const postIphone = (req,res) => {
    let iphone = req.body;
    collection.postIphone(iphone, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllIphones = (req,res) => {
    collection.getAllIphones((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteIphone = (req,res) => {
    let iphone = req.body;
    collection.deleteOne(iphone, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postIphone,getAllIphones}