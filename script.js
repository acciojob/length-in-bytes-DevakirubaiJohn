const byteSize = (str) => {
  // write your code here
	 // Create a new Blob object with the inputString
  let blob = new Blob([str], {type : "text/plain"});
  
  // Use the size property of the Blob object to get the size of the string in bytes
  let size = blob.size;
  
  // Return the size
  return size;
};



// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
