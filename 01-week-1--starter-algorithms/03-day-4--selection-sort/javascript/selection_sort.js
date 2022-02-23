function selectionSort(arr) {
 const sortArr = [];

 while(arr.length > 0) {
   const min = Math.min(...arr)
   const index = arr.indexOf(min)

   sortArr.push(min)
   arr.splice(index, 1)
 }
 return sortArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }


const startTime = Date.now()

for(let i = 0; i < 1000; ++i){
  selectionSort([2,1])
  selectionSort(longInput)
}

const time = Date.now() - startTime / 2000;

console.log(time)
}
module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
