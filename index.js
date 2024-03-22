let resultEl = document.getElementById("result")

const time1 = document.getElementById("time-1") 
const time2 = document.getElementById("time-2")
const time3 = document.getElementById("time-3")
const time4 = document.getElementById("time-4")
const time5 = document.getElementById("time-5")

const value1 = time1.value
const value2 = time2.value
const value3 = time3.value
const value4 = time4.value
const value5 = time5.value

//! the numbers are concatonated as a string and not sumed up, resulting in a computation error
function showResult() {
    const timesList = storeInput()
    let minmax = getMinMax(timesList)
    let fastestTime = minmax.min
    let slowestTime = minmax.max
    let result = 0
    
    for (let i = 0; i < timesList.length; i++) {
        if (timesList[i] != fastestTime && timesList[i] != slowestTime) {
            result += timesList[i]
        }
    }
    result /= 3
    resultEl.textContent = result.toFixed(3)
    // console.log(result)
}

function resetTime() {
    time1.value = time2.value = time3.value = time4.value = time5.value = ""
    resultEl.textContent = 0
}

function storeInput() {
  // Initialize an empty array
  const inputArray = [];

  // Get the input elements
  const time1 = document.getElementById("time-1") 
  const time2 = document.getElementById("time-2")
  const time3 = document.getElementById("time-3")
  const time4 = document.getElementById("time-4")
  const time5 = document.getElementById("time-5")
  

  // Get the values of the input elements
  const value1 = time1.value;
  const value2 = time2.value;
  const value3 = time3.value;
  const value4 = time4.value;
  const value5 = time5.value;
  

  // Add the values to the array
  inputArray.push(parseFloat(value1), parseFloat(value2), parseFloat(value3), 
  parseFloat(value4), parseFloat(value5));

  // Print the array to the console
  console.log(inputArray);
  return inputArray;
}
// console.log(times_list)

function getMinMax(arr) {
    // Create an object to store the minimum and maximum values
    const minmax = {};
 
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
 
    // Store the minimum element as the first element of the sorted array
    minmax.min = arr[0];
    // Store the maximum element as the last element of the sorted array
    minmax.max = arr[arr.length - 1];
 
    // Return the object containing the minimum and maximum values
    return minmax;
}