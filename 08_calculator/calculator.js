const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	if(a == ""){
    return 0;
}  else {
    return (a.reduce(myFunction));
    function myFunction(total, value) {
    return total + value;
    }
}
};

const multiply = function(a) {
  let n  = 1;
    for(i=0;i<a.length;i++){
        console.log(n = n*a[i]);
    }
    return n;
}

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	  if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
