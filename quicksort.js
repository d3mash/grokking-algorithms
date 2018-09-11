const testArray = [1, 5, 9, 3, 6, 2, 15, 86, 41, 24, 52];

const quicksort = (array) => {
	if (array.length < 2) {
		return array;
	} else {
		const base = array[0];
		const lessThan = array.slice(1).filter(e => e < base);
		const greaterThan = array.slice(1).filter(e => e >= base);
		return quicksort(lessThan).concat([base], quicksort(greaterThan));
	}
}

console.log(quicksort(testArray));