function printNumbers(num1, num2){
	let i = num1;
let number = setInterval(function (){

	if ( i== num2+1 ){
	clearInterval(number)
}else {
	console.log(i)
		
	} i++
},1000)
}
	printNumbers(5,15)
