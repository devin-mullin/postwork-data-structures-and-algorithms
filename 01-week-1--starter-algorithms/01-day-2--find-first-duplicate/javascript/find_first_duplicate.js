function findFirstDuplicate(arr) {
  let firstIndex
  let isMatch = false
  for(i = 0; i < arr.length; i++){
    for(j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        firstIndex = arr[i];
        isMatch = true
    }
  }
}
if(isMatch === true)
return firstIndex
else 
return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// two indexes created by iterating over the array, compared for equality