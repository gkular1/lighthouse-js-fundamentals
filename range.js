const range = function(start, end, step) {
  let arr = [];
  for (i = start; i <= end; i += step){
     arr.push(i);
  };
  return arr;
}

console.log(range(1,10,2));
