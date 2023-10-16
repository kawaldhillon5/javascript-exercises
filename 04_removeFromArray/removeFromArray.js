const removeFromArray = function() {
    let arr = arguments[0];
    let n = arguments.length;
    for(i=1;i<n;i++){
        let f = arguments[i]
        if(arr.indexOf(f)>=0){
        arr.splice(arr.indexOf(f),1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
