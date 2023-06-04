var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('input-type');
var resultType = document.getElementById('result-type');
var button=document.getElementById('submit');
var from,opto;

/*input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
*/
button.addEventListener(onclick,myResult);

from = inputType.value;
to   = resultType.value;


function myResult(){

	from = inputType.value;
	to = resultType.value;


	if(from === "m" && to==="km")
	{
		result.value = Number(input.value) * 0.001;
	}
	else if(from === "m" && to==="cm")
	{
		result.value = Number(input.value) * 100;

	}
	else if(from === "m" && to==="m")
	{
		result.value = input.value
	}



	if(from === "km" && to==="m")
	{
		result.value = Number(input.value) * 1000;
	}
	else if(from === "km" && to==="cm")
	{
		result.value = Number(input.value) * 100000;
	}
	else if(from === "km" && to==="km")
	{
		result.value = input.value
	}



	if(from === "cm" && to==="km")
	{
		result.value = Number(input.value) * 0.00001;
	}
	else if(from === "cm" && to==="m")
	{
		result.value = Number(input.value) * (0.01);
	}
	else if(from === "cm" && to==="cm")
	{
		result.value = input.value
	}
}