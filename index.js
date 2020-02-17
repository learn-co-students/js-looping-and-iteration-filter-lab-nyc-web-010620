// Code your solution in this file

function findMatching(drivers, str){
  return drivers.filter(function (el) {
    return el.toLowerCase() == str.toLowerCase()
  })
}

function fuzzyMatch(drivers, str){
  const strLength = str.length
  return drivers.filter(function (el){
    return el.slice(0,strLength) == str 
  })
}

function matchName(drivers, str){
  return drivers.filter(function (el){
    return el.name === str 
  })
}


