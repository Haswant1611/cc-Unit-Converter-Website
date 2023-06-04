var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('input-type');
var resultType = document.getElementById('result-type');
var button=document.getElementById('submit');
var from,to;

/*input.addEventListener("keyup",myResult);
inputType.addEventListener("sfthange",myResult);
resultType.addEventListener("sfthange",myResult);
*/
button.addEventListener(onclick,myResult);


function myResult(){

	from = inputType.value;
	to = resultType.value;


	if(from === "sft" && to==="sin")
	{
		result.value = Number(input.value) * (144);
	}
	else if(from === "sft" && to==="sqm")
	{
		result.value = Number(input.value) * 0.0929;

	}
	else if(from === "sft" && to==="sft")
	{
		result.value = input.value;
	}



	if(from === "sin" && to==="sft")
	{
		result.value = (Number(input.value) * 0.00694) ;
	}
	else if(from === "sin" && to==="sqm")
	{
		result.value = ((Number(input.value) - 32) * 0.00064);
	}
	else if(from === "sin" && to==="sin")
	{
		result.value = input.value;
	}



	if(from === "sqm" && to==="sft")
	{
		result.value = Number(input.value) * 10.76391;
	}
	else if(from === "sqm" && to==="sin")
	{
		result.value = Number(input.value) * 1500.0031;
	}
	else if(from === "sqm" && to==="sqm")
	{
		result.value = input.value;
	}
}