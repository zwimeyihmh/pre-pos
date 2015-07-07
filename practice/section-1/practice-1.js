function findSame(element,collection_b)
{
  for(var x = 0; x < collection_b.length; x++)
  {
    if(collection_b[x] === element)
    {
      return element;
    }
  }

  return undefined;
}

function collect_same_elements(collection_a, collection_b) {
  var result = [];

  for(var i = 0; i < collection_a.length; i++)
  {
    var temp = findSame(collection_a[i],collection_b);
    if(temp)
    {
      result.push(temp);
    }
  }

  return result;
}
