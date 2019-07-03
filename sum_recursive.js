/*function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));*/

//function sum (fromN, toN) {
//  // Sum all the values from fromN up to toN
//  if(toN >= fromN){
//  return toN + sum( fromN,toN - 1);}
//  return 0;
//} 
//
//console.log(sum(3, 7));


function sum (fromN, toN) {
  // Sum all the values from fromN up to toN
  if(toN >= fromN){
  return fromN + sum( fromN+1,toN);}
  return 0;
} 

console.log(sum(3, 7));