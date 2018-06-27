const binarySearch = (item, list) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess == item){
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

// the maximum number of steps is log2(n)
// on the contrary to simple search