let changedAfterSolve = 0;
//Function to add number to input
function disNum(val){
if(changedAfterSolve == 0){
	document.getElementById("input").value="";
	document.getElementById("input").value+=val;
	changedAfterSolve = 1;
	}
else{
	document.getElementById("input").value+=val;
	}
}
//Add Operator to input
function disOp(val){
document.getElementById("input").value+=val;
changedAfterSolve = 1;
}
//function that evaluates the digit and return input
function solve(){
	if(changedAfterSolve == 0){
		document.getElementById("result").value = '0';
		document.getElementById("input").value = "";
	}
	else{
		let x = document.getElementById("input").value;
		try{
			let y = eval(x);
			document.getElementById("result").value = document.getElementById("input").value;
			document.getElementById("result").value +='=';
			document.getElementById("result").value += y;
			document.getElementById("input").value = y;
			changedAfterSolve = 0;
		}
		catch (e) {
			if (e instanceof SyntaxError) {
				document.getElementById("result").value = "Error";
				changedAfterSolve = 0;
			}
		}
	}
}

//function that clear the input and result
function clr(){
	document.getElementById("input").value = "";
	document.getElementById("result").value = "";
}
//function that backspaces the input
function bkspc(){
	document.getElementById("input").value = document.getElementById("input").value.slice(0, document.getElementById("input").value.length - 1);
	changedAfterSolve = 1;
}