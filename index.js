const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name){
    return array.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
};

function fuzzyMatch(array, name){
    return array.filter(function(driverName){
        return driverName.substring(0,2)===name.substring(0,2);
    });
};

function matchName(array, name){
    return array.filter(function (item){
        return  item.name === name;
    });
};