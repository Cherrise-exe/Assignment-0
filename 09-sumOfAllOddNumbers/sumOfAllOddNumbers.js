function sumOfAllOddNumbers(nums) {
  // Insert code here;
  function odd(n){
  return Boolean(n % 2)
}

function findSum(n) {
  let sum = 0;
  for(let count = 0; count <= n; count++){
    if(odd(count)) {
      sum += count;
    }
  }
  return console.log(sum);
}

}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
