var fs = require('fs');

// 阻塞代码
/*var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('执行结束')*/

// 非阻塞代码
/*fs.readFile('input.txt', function(err, data) {
	if (err) {
		return console.error(err)
	}
	console.log(data.toString())
})

console.log('执行结束')*/

//Node.js 事件循环
// 1、事件驱动程序
var events = require('events');

// 创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var connectHandler = function connectd() {
	console.log('链接成功.');

	eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
	console.log('数据接收成功')
})

setTimeout(function() {
	eventEmitter.emit('connection');
}, 1000)

console.log('程序执行完毕');