function iterativeLog(array){
  array.forEach((element,index)=>{
    console.log(`${index}: ${element}`);
  });
}


function iterate(callback){
  var newArray = [0,1,2,3,4,5];
  newArray.forEach(callback)
  return newArray;

}


function doToArray(array,callback){
  array.forEach(callback)
}
