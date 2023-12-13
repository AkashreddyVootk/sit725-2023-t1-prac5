const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/iphone';
let iphone = {paht:'',title:''}


describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(a,b,c){
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function(){
    it('post iphone to DB', function(done){
        request.post({url:url,form:iphone}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a iphone', function(done){
        request.delete({url:url,form:iphone}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});