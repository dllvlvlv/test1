//函数内部写返回函数
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if(value1 < value2){
			return -1;
		} else if(value1 > value2){
			return 1;
		} else {
			return 0;
		}
	};
}

var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];
data.sort(createComparisonFunction("name"));
//console.log("first", data[0].name);

data.sort(createComparisonFunction("age"));
//console.log("second", data[0].name);

//arguments.callee消除耦合
function factorial(num) {
	if(num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num-1);
	}
}
var result = factorial(3);
//console.log("result",result);

//this用法
window.color = "red";
var o = {color: "blue"};
function sayColor() {
	//console.log(this.color);
}
sayColor();  //"red"
o.sayColor = sayColor;
o.sayColor(); //"blue"

//apply,call,bind用法(传参，扩大作用域)
window.color = "red";
var o = {color: "blue"};
function sayColor() {
	//console.log(this.color);
}
sayColor.call(this);   //red
sayColor.call(window); //red
sayColor.call(o);      //blue
var objectSayColor = sayColor.bind(o);
objectSayColor();//blue

//进制转换
var num = 10;
num.toString();
num.toString(2);
num.toString(8);
num.toString(10);
num.toString(16);

//指定保留小数位
num.toFixed(2);

//指数表示法
num.toExponential(1);

//自适应类型(指数或者保留小数)
num.toPrecision();

//输出指定位置字符
charAt(1);

//输出指定位置的字符编码
charCodeAt(1);
//通过字符编码输出字符
fromCharCode();

//拼接字符串
concat("要拼接的字符串");

//裁剪字符串
slice substring (起始位置，结束位置不包含本身)
substr(起始位置，返回的字符个数)

//字符串位置
indexOf("目标字符"，起始位置);  //从开头开始搜索的第一个
lastIndexOf("目标字符"，起始位置); //从最后一个开始搜索的第一个

//删除前置后置空格
trim();

//随机生成0和1之间的数
Math.random();

//某个范围内随机显示一个值
值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)


