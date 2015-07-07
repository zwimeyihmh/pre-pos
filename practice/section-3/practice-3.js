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

function create_updated_collection(collection_a, object_b) {
  var result = [];
  var c = count_same_elements(collection_a);
  for(var i = 0;i < c.length;i++){
    if(findBSame(c[i].key,object_b.value)){
      var temp = parseInt(c[i].count/3);
      c[i].count -= temp;
    }
    result.push(c[i]);
  }
  return result;
}

function findBSame(key,objectB)
{
  for(var x = 0; x < objectB.length; x++){
    if(key === objectB[x])
    {
      return true;
    }
  }
  return false;
}
