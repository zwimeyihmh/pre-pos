function create_updated_collection(collection_a, object_b) {
  //在这里写入代
  var result = [];
  var temp;
  var tempn = 0;
  for(var i = 0;i < collection_a.length;i++)
  {
    tempn = 0;
    for(var x = 0;x < object_b.value.length;x++)
    {
      if(collection_a[i].key === object_b.value[x])
      {
        tempn = 1;
        temp = collection_a[i].count;
        while(temp > 2)
        {
          temp -= 3;
          collection_a[i].count --;
        }
      }
      if(tempn === 1)
      {
        break;
      }
    }
    result[i] = collection_a[i];
  }
  return result;
}
