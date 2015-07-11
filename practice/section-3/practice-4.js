function create_updated_collection(collection_a, object_b) {
  var result = [];
  var c = count_same_elements(collection_a);
  for(var i = 0;i < c.length;i++){
    if(findSame(c[i].key,object_b.value)){
      var temp = parseInt(c[i].count/3);
      c[i].count -= temp;
    }
    result.push(c[i]);
  }
  return result;
}

function count_same_elements(collection) {
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if(notInResult(collection[i][0],result)){
      var sum = findSame(collection[i][0],collection);
//      var sum = findBSame(collection[i][0],collection);
      if(sum > 0){
        result.push({key:collection[i][0],count:sum});
      }
    }
  }
  return result;
}
/*
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
*/

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
    if(element === array[x][0]){
      if(array[x].length === 1){
        count++;
      }
      else {
        count += findNum(array[x]);
      }
    }
  }
  return count;
}

function findNum(array)
{
  var temp = "";
  for(var i = 0; i < array.length; i++)
  {
    if(array[i] >= 0 && array[i] <= 9)
    {
      temp += array[i];
    }
  }
  return parseInt(temp,10);
}
