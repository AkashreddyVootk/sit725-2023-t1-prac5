let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postIphone(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllIphones(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllIphones(req,res);
});


module.exports = router;