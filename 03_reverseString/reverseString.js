const reverseString = function(text) {;
let myarr = text.split("");
myarr = myarr.reverse();
text = myarr.join("");
return text;
};

// Do not edit below this line
module.exports = reverseString;
