var IsClear = false ;
var cal = "" ;

function get(key) {
	var str = document.getElementById("text").value;
	if(IsClear) {
		str = "0";
	    IsClear = false;	
	}
	if(str.length < 20) {
		str = (str ==  "0" ? "" : str);
		if( str == "" && key == '00' ) {
			str = "0";
		} else {
			str += key;
		}
	}
	document.getElementById("text").value = str;
}

function goBack() {
	var str = document.getElementById("text").value;
	str = str.substring(0, str.length - 1);
	if(str == "") str = "0";
	document.getElementById("text").value = str;
}

function clearText() {
	document.getElementById("text").value = "0";
}

function eq() {
	IsClear = true;
	var str = document.getElementById("text").value;
	var result = eval(str)
	if(result == "Infinity") {
		result = "输入有误";
	}
	document.getElementById("text").value = result;
}

//js内置的eval() 函数， 只需要将文本框的字符串作为参数传入即可得到结果， 就能够进行简单的运算.