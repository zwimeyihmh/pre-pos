function notInResult(element,result)
{
  for(var i = 0; i < result.length; i++){
    if(element === result[i].key){
      return false;
    }
  }
  return true;
}

function findSame(element,array){
  var count = 0;
  for(var x = 0; x < array.length; x++){
    if(element === array[x]){
      count++;
    }
  }
  return count;
}

function count_same_elements(collection) {
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if(notInResult(collection[i],result)){
      var sum = findSame(collection[i],collection);
      if(sum > 0){
        result.push({key:collection[i],count:sum});
      }
    }
  }
  return result;
}
