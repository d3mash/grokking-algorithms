// in this example a key is represented by a number, while a box is represented by an array
const testArray = [[[[[3]]]], [5]]
const lookForKey = (boxes) => {
	if (boxes.length === 0) {
		return false;
	}
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