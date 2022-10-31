function func1(num1){
	return function(num2){
		return(num1+num2)
	}
}
let sumFunc = func1(29)
let sum = sumFunc(61)
console.log(sum)