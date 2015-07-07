
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
function notInResult(element,result)
{
  for(var i = 0; i < result.length; i++){
    if(element === result[i].key){
      return false;
    }
  }
  return true;
}

function notInResult(element,result)
{
  for(var i = 0; i < result.length; i++){
    if(element === result[i].key){
      return false;
    }
  }
  return true;
}

function count_same_elements(collection) {
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if(notInResult(collection[i][0],result)){
      var sum = findSame(collection[i][0],collection);
      if(sum > 0){
        result.push({key:collection[i][0],count:sum});
      }
    }
  }
  return result;
}
