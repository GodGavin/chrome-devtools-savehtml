var formidable = require('formidable');
var http = require('http');
var util = require('util');
var url = require('url');
var fs = require('fs');
var express = require("express");
var bodyParser = require('body-parser');//解析,用req.body获取post参
var path = require('path');



var querystring = require('querystring');
var app = express();
    //var urlObj = url.parse(req.url,true);

    //var pathname = urlObj.pathname;
    //console.log('server收到的urlpathname:'+pathname);

	// if(pathname=='/upload'){

		app.use(bodyParser.json());
		//app.use(bodyParser.urlencoded({extended: false}));

		app.post("/upload",function(req,res){
		console.log('server收到的req.body:'+req.body);
		//var posstringify=JSON.stringify(req.body);
		//var	postparse=JSON.parse(posstringify);
		var saveresult='';
		 //console.log('server收到的postparse参数:'+postparse);
		 //console.log('server收到的postposstringify参数:'+posstringify);

         console.log('server收到的网址'+JSON.parse(JSON.stringify(req.body.tab)));
         console.log('server收到的html:'+JSON.parse(JSON.stringify(req.body.htmlresponse)));
    	 fs.writeFile(JSON.parse(JSON.stringify(req.body.tab)),JSON.parse(JSON.stringify(req.body.htmlresponse)), { 'flag': 'w' }, function(err) {
	    if (err) {
            throw err;
		    saveresult='写入失败'+err;
			console.log(saveresult);
		}else{     
			      saveresult='写入完毕';
			      console.log(saveresult);			
		    };
      });

        res.send({saveresult:saveresult});
		})

        


  //  }else{
    //    res.end('404');
    //}

	app.listen(9105, () => {
    console.log('server savehtml running on 9105')
});