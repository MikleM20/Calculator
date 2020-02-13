
//function that display value
let ans = 0;
function dis(val){
document.getElementById("input").value+=val;
}

//function that evaluates the digit and return input
function solve(){
	let x = document.getElementById("input").value;
	try{
		let y = eval(x);
		document.getElementById("result").value = document.getElementById("input").value;
		document.getElementById("result").value +='=';
		document.getElementById("result").value += y;
		document.getElementById("input").value = y;
	}
	catch (e) {
		if (e instanceof SyntaxError) {
			document.getElementById("result").value = "Error";
		}
    }
}

//function that clear the display
function clr(){
document.getElementById("input").value = "";
document.getElementById("result").value = "";
}

function bkspc(){
document.getElementById("input").value = document.getElementById("input").value.slice(0, document.getElementById("input").value.length - 1);
}