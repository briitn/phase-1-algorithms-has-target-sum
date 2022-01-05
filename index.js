function hasTargetSum(array, target) {
  // Write your algorithm here
 
  for (let i=0; i<array.length;i++){
    
    for (let j=i+1;j<array.length;j++){if (array[j]+array[i]===target)return true
      } 
   }return false}



/* 
0(n^2)
*/

/* 

  add numbers in array
  if numbers=target
  return true
*/

/*

we need a function that adds 2 numbers in an array and returns true if the 2 numbers equal the target.
We make a function that loops through each number and adds the first number(i) to the second number(j)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 15, 7, 6, 9], 13));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 13, 43, 6, 5], 13));
}

module.exports = hasTargetSum;
