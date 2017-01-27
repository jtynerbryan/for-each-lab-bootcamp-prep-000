function log(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterativeLog(array) {
  array.forEach(log)
}

function iterate(callback) {
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  nums.forEach(callback)
  return nums
}

function doToArray(array, callback) {
  array.forEach(callback)
}
