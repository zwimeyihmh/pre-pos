function findB(elementA,elementB)
{
  for(var y = 0; y < elementB.length; y++)
  {
    if(elementA === elementB[y]){
      return elementA;
    }
  }
  return undefined;
}

function findSame(element,collection_b)
{
  for(var x = 0; x < collection_b.length; x++)
  {
    var temp = findB(element,collection_b[x]);
    if(temp){
      return temp;
    }
  }
  return undefined;
}

function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(var i = 0; i < collection_a.length; i++)
  {
    var  temp;
    temp = findSame(collection_a[i],collection_b);
    if(temp){
      result.push(temp);
    }
  }
  return result;
}
