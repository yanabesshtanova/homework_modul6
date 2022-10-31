function countOfOdd(){
    let arr = [1, 5, 6, 44, 43, 37, 0, 0, 54,0, 7,1];
	let c = 0;
	let z =0;
	let zero = 0 ;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zero +=1;}
		else if (arr[i] % 2 == 0){
			c+=1;}
		else  {
			z +=1
		}
		
}
console.log (` в массиве четных чисел ${c}, нечетных чисел ${z} , нулей ${zero} `);
}
countOfOdd()


