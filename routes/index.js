var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/savescreenshot', function(req, res, next){

console.log(req.body.width);

    var base64Data = req.body.screenshot.replace(/^data:image\/(png|gif|jpeg);base64,/,'');
    const buf = Buffer.from(base64Data, 'base64');
  fs.writeFile(os.homedir() + "/Desktop/screenshots/" + "lastScreenshot" + req.body.width + "x" + req.body.height + ".png", buf);



res.json({"code": "ok"});
    

});

module.exports = router;
