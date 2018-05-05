// Arrays Pt. 1
// No built-in array methods allowed!

// Push Front
// Given array and value, insert value at the beginning.
let pushFront = (arr, value) => [value, ...arr];
pushFront = (arr, value, idx = arr.length - 1) => {
  if (idx === 0) {
    [arr[0], arr[1]] = [value, arr[0]];
    return arr;
  }
  arr[idx + 1] = arr[idx];
  return pushFront(arr, value, idx - 1);
};

// Insert At
// Given array, index, and value, insert value at the given index.
const insertAt = (arr, idx, value, idx2 = arr.length - 1) => {
  if (idx2 === idx) {
    [arr[idx], arr[idx + 1]] = [value, arr[idx]];
    return arr;
  }
  arr[idx + 1] = arr[idx];
  return insertAt(arr, idx, value, idx2 - 1);
};

// Pop Front
// Given array, remove and return value at the beginning.
const popFront = (arr, idx = 0, value = arr[0]) => {
  if (idx === arr.length) {
    arr.length--;
    return value;
  }
  arr[idx] = arr[idx + 1];
  return popFront(arr, idx + 1, value);
};

// Remove At
