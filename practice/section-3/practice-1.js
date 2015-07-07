function create_updated_collection(collection_a, object_b) {
  var result = [];
  var y = 0;
  for(var i = 0;i < collection_a.length;i++)
  {
    if(findBSame(collection_a[i].key,object_b.value)){
      collection_a[i].count--;
    }
    result.push(collection_a[i]);
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
