//your JS code here. If required.
// Create an object called student with a property called name
var student = {
  name: "John"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  // Return an array of all the keys in the object
  return Object.keys(this);
};

// Use the getKeys() method on the student object
var keysArray = student.getKeys();

// Display the result
console.log(keysArray);