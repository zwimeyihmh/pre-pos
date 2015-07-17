 function create_updated_collection(collection_a, object_b) {
  var result = [];
  for (var i = 0;i < collection_a.length;i++) {
    if (findBSame(collection_a[i].key,object_b.value))  {
      var temp = parseInt(collection_a[i].count/3);
      collection_a[i].count -= temp;
    }
    result.push(collection_a[i]);
  }
  return result;
}

function findBSame(key,objectB)
{
  for (var x = 0; x < objectB.length; x++) {
    if (key === objectB[x]) {
      return true;
    }
  }
  return false;
}
