var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('input-type');
var resultType = document.getElementById('result-type');
var button=document.getElementById('submit');
var from,to;

/*input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
*/
button.addEventListener(onclick,myResult);


function myResult(){

	from = inputType.value;
	to = resultType.value;


	if(from === "c" && to==="f")
	{
		result.value = ((Number(input.value) * (1.8)) + (32));
	}
	else if(from === "c" && to==="k")
	{
		result.value = Number(input.value) + 273;

	}
	else if(from === "c" && to==="c")
	{
		result.value = input.value;
	}



	if(from === "f" && to==="c")
	{
		result.value = (Number(input.value) - 32) * 5/9;
	}
	else if(from === "f" && to==="k")
	{
		result.value = ((Number(input.value) - 32) * 5/9)+ 273.15;
	}
	else if(from === "f" && to==="f")
	{
		result.value = input.value
	}



	if(from === "k" && to==="c")
	{
		result.value = Number(input.value) -273;
	}
	else if(from === "k" && to==="f")
	{
		result.value = (Number((input.value) - (273)* 1.8)+32);
	}
	else if(from === "k" && to==="k")
	{
		result.value = input.value
	}
}