const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = 2008;
let fs = require('fs'),
json;

module.exports.returnOutput = function() {
  let rawOutput = fs.readFileSync('exampleoutput.json')
  let output = JSON.parse(rawOutput);
  //send to front end//
  APP.get('/',(req,res)=>res.send(output));
  APP.listen(PORT,function() {
    console.log(`listening on port ${PORT}`);
  })
}