function findMatching(list, name){
    return list.filter(function(driver){ return driver.toLowerCase() == name.toLowerCase()});
}

function fuzzyMatch(list, part){
    return list.filter(function(driver){ return driver.slice(0, part.length) === part});
}

function matchName(list, name){
    return list.filter(function(driver) { 
        return driver.name.toLowerCase() === name.toLowerCase();
        }
    )
}