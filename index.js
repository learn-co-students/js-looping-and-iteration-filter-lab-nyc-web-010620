// Code your solution in this file

function findMatching(drivers,name) {
    let filtered = drivers.filter (function (driver) { return driver.toUpperCase() === name.toUpperCase() })
    return filtered
}

function fuzzyMatch(drivers,string) {
    let len = string.length
    return drivers.filter (function (driver) { return driver.slice(0,len) === string })
}

function matchName(driversObj,string) {
    return driversObj.filter (function (driver) { return driver["name"] === string })
}