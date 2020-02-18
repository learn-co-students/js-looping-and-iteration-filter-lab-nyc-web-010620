// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === name.toLowerCase() 
    })
}


function fuzzyMatch(drivers, subString) {
    return drivers.filter(function (driver) {
        const driverBegSubS = driver.slice(0, (subString.length + 1))
        return driverBegSubS.toLowerCase().includes(subString.toLowerCase())
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name
    })
}