const drivers = []

// This function takes an array of drivers and a name (string) as arguments, 
// and returns the matching list of drivers that match the passed in name.
// The function should be case insensitive
function findMatching(drivers, passedName) {
   return drivers.filter(function (driverName) {
      return driverName.toLowerCase() === passedName.toLowerCase(); 
   })
}

// takes an array of drivers and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, partialName) {
   const lengthOfName = partialName.length
   return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName; 
   })
}

// This function takes an array of drivers and a string as arguments. In this function, 
// each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.
function matchName(drivers, passedName) {
   return drivers.filter(function (driver) {
      return driver.name.toLowerCase() === passedName.toLowerCase(); 
   })
}