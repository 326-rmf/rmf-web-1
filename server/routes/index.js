var express = require('express');
var router = express.Router();
var cors = require('cors');
var request = require('request');
/* GET home page. */
router.get('/', cors(),function(req, res) {
	console.log(req.query.keyword);
	console.log(req.query.num);
    request.post({url:'https://api.jisuapi.com/recipe/search', form:{
    	appkey:'2d002cc53a587931',
    	keyword:req.query.keyword,
		start:(req.query.num - 1) * 20,
		num:20
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/weather', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'https://api.jisuapi.com/weather/query', form:{
    	appkey:'2d002cc53a587931',
    	city:req.query.keyword
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/news', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'https://api.jisuapi.com/news/get', form:{
    	appkey:'2d002cc53a587931',
    	channel:'头条',
    	num:40,
    	start:0
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

/*
	账号:15201341330
	
	密码：Qq326894


*/

router.get('/date', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'http://gamehelper.gm825.com/wzry/hero/list?channel_id=90009a&app_id=h9044j&game_id=7622&game_name=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&vcode=12.0.3&version_code=1203&cuid=2654CC14D2D3894DBF5808264AE2DAD7&ovr=6.0.1&device=Xiaomi_MI+5&net_type=1&client_id=1Yfyt44QSqu7PcVdDduBYQ%3D%3D&info_ms=fBzJ%2BCu4ZDAtl4CyHuZ%2FJQ%3D%3D&info_ma=XshbgIgi0V1HxXTqixI%2BKbgXtNtOP0%2Fn1WZtMWRWj5o%3D&mno=0&info_la=9AChHTMC3uW%2BfY8%2BCFhcFw%3D%3D&info_ci=9AChHTMC3uW%2BfY8%2BCFhcFw%3D%3D&mcc=0&clientversion=&bssid=VY%2BeiuZRJ%2FwaXmoLLVUrMODX1ZTf%2F2dzsWn2AOEM0I4%3D&os_level=23&os_id=dc451556fc0eeadb&resolution=1080_1920&dpi=480&client_ip=192.168.0.198&pdunid=a83d20d8', form:{
    	// appkey:'2d002cc53a587931',
    	// date:req.query.keyword
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/hero', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'http://gamehelper.gm825.com/wzry/hero/detail?hero_id='+ req.query.keyword +'&channel_id=90009a&app_id=h9044j&game_id=7622&game_name=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&vcode=12.0.3&version_code=1203&cuid=2654CC14D2D3894DBF5808264AE2DAD7&ovr=6.0.1&device=Xiaomi_MI+5&net_type=1&client_id=1Yfyt44QSqu7PcVdDduBYQ%3D%3D&info_ms=fBzJ%2BCu4ZDAtl4CyHuZ%2FJQ%3D%3D&info_ma=XshbgIgi0V1HxXTqixI%2BKbgXtNtOP0%2Fn1WZtMWRWj5o%3D&mno=0&info_la=9AChHTMC3uW%2BfY8%2BCFhcFw%3D%3D&info_ci=9AChHTMC3uW%2BfY8%2BCFhcFw%3D%3D&mcc=0&clientversion=&bssid=VY%2BeiuZRJ%2FwaXmoLLVUrMODX1ZTf%2F2dzsWn2AOEM0I4%3D&os_level=23&os_id=dc451556fc0eeadb&resolution=1080_1920&dpi=480&client_ip=192.168.0.198&pdunid=a83d20d8', form:{
    	// appkey:'2d002cc53a587931',
    	// date:req.query.keyword
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/list_total', cors(),function(req, res) {
	request.get({url:'https://c.m.163.com/ug/api/wuhan/app/data/list-total'}, function (error ,response, body) {
		// 返回的结果和 GET 一样
		res.send({
			body:body
		})
	})
});

router.get('/sina', cors(),function(req, res) {
	request.get({url:'https://interface.sina.cn/news/wap/fymap2020_data.d.json'}, function (error ,response, body) {
		// 返回的结果和 GET 一样
		res.send({
			body:body
		})
	})
});
router.get('/disease', cors(),function(req, res) {
	request.get({url:'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'}, function (error ,response, body) {
		// 返回的结果和 GET 一样
		res.send({
			body:body
		})
	})
});



module.exports = router;
