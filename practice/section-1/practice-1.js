function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var y = 0;
  for(var i = 0;i < collection_a.length;i++)
  {
    for(var x = 0;x < collection_b.length;x++)
    {
      if(collection_a[i] === collection_b[x])
      {
        result[y++] = collection_a[i];
        break;
      }
    }
    if(y === collection_b.length)
    {
      break;
    }
  }
  return result;
}
