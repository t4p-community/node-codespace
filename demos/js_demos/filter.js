
const nums = [1,5,2,9,6,3,8,2];

const doubleNums = nums.map(num => num * 2);

// function expression
// const greaterThan4 = function (num) { return num > 4; };

// function declaration
function greaterThan4(num) {
  return num > 4;
};

function myfilter(arr, predicateFn) {

  const newArr = [];

  arr.forEach(element => {
    if (predicateFn(element))
      {
        newArr.push(element);
      }
  });
}
console.log(nums);
console.log(doubleNums);
console.log(myfilter(nums, greaterThan4));