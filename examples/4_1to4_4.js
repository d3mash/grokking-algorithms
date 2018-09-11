// 4.1 
const sum = (array) => {
	if (array.length === 0) {
		return 0;
	} else 
	return array[0] + sum(array.slice(1));
}
console.log(sum([1, 2, 3]));

//4.2
const count = (array) => {
	if (array.length === 0) {
		return 0;
	} else
	return 1 + count(array.slice(1));
}
console.log(count([1, 2 ,1 , 4]));

//4.3
const findMax = (array) => {
	if (array.length === 0) {
		return 'array is empty';
	}
	let max = array[0];
	for (let element of array) {
		if (element > max) {
			max = element;
		} 
	}
	return max;
}
console.log(findMax([4, 3, 1, 5, 2]));
console.log(findMax([]));