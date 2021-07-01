let requests = require('requests')
let fs = require('fs')
let path = require('path')
const cheerio = require('cheerio');



requests('https://ncov.dxy.cn/ncovh5/view/pneumonia')
.on('data',function(chunk){
	let window = {}
	const $ = cheerio.load(chunk)
	eval($("#getAreaStat").html())
	// console.log(window)
	// console.log($("#getAreaStat").html())
	// $("#getAreaStat").html
	fs.writeFile(path.resolve(__dirname,'pachong1.json'),
	JSON.stringify(window.getAreaStat),()=>{
		console.log('保存成功')
	})
})
