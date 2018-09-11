// in this example a key is represented by a number, while a box is represented by an array
const testArray = [[[[[3]]]]]
const lookForKey = (boxes) => {
	for (let element of boxes) {
		if (typeof element === 'number') {
			return element;
		} else if (element instanceof Array) {
			return lookForKey(element);
		}
		break;
	}
};

console.log(lookForKey(testArray));