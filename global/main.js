// 输出全局变量 __filename 的值
console.log(__filename)

// 输出全局变量 __dirname的值
console.log(__dirname);

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
//返回一个代表定时器的句柄值
function printHello() {
	console.log('hello world')
}

var t = setTimeout(printHello, 2000);
clearTimeout(t);

var ts = setInterval(printHello, 2000);
clearInterval(ts)