var moment = require('moment');
var unique = require('uniq');

var date = new Date();
var myCoolDate = moment(date).format('LL');

var myList = [1,2,3,43,32,2,1,1,3,3,4,4,5,5,6,6,7,4];

var myUniqueList = unique(myList);

console.log(myUniqueList);

console.log(myCoolDate);
