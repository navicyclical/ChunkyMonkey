function chunk(arr, size){
  //define arrays
  //outer array
  var outerArray = [];
  //inner array
  var innerArray = [];
  // work on the inner array
  //DRY, array push
  function arrayUpdate(){
    outerArray.push(innerArray);
    innerArray = [];
  }

  for (var i=0;i<arr.length;i++){
    //define an if statement for the inner array
      innerArray.push(arr[i]);
      if(innerArray.length === size){
        arrayUpdate();
      }
      else if(i + 1 === arr.length && innerArray !== []){
        arrayUpdate();
      }
  }
  console.log(innerArray);
  console.log(outerArray);
  return outerArray;
}
chunk(["a", "b", "c", "d"], 2);
