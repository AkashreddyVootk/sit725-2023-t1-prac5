let client = require('../dbConnection');

let collection = client.db().collection('iphones');

function postIphone(iphone, callback) {
    collection.insertOne(iphone,callback);
}

function getAllIphones(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postIphone,getAllIphones}