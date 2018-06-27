const findMin = (array) => {
  let min = array[0];
  let index = 0;
  for (let element of array){
    if (element < min){
      min = element;
      index = array.indexOf(element);
    }
  }
  return index;
};
console.log(findMin([50, 60, 50, 40, 50]));
const selectionSearch = (array) => {
  const output = [];
  const bound = array.length;
  for (let counter = 0; counter < bound; counter++) {
    const min = findMin(array);
    output.push(array[min]);
    array.splice(min, 1);
  }
  return output;
};

export default selectionSearch;