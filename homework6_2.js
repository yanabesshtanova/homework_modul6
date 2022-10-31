function nnumber(numm) {
	let result;
	if (numm > 1000) {
		result = " данные неверны"
		console.log(result);
	}
	else if (numm < 1001 && (numm ^ 0) === numm) {
		result = (`${numm} целое число`)
		console.log(result);
	}
	else {
		console.log(`${numm} не целое число`)
	}
}
nnumber(-666)