function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var c = [];
  var y = 0;
  result[y] = {key:collection_a[0][0],count:0};
  for(var i = 0;i < collection_a.length;i++)
  {
    if(collection_a[i].length === 1)
    {
      if(collection_a[i] === result[y].key)
      {
        result[y].count++;
      }
      else {
        result[++y]={key:collection_a[i],count:1}
      }
    }
    else {
      result[++y] = {key:collection_a[i][0],count:Number(collection_a[i][2])};
    }
  }
  var temp;
  var tempn = 0;
  for(var i = 0;i < result.length;i++)
  {
    tempn = 0;
    for(var x = 0;x < object_b.value.length;x++)
    {
      if(result[i].key === object_b.value[x])
      {
        tempn = 1;
        temp = result[i].count;
        while(temp > 2)
        {
          temp -= 3;
          result[i].count --;
        }
      }
      if(tempn === 1)
      {
        break;
      }
    }
    c[i] = result[i];
  }
  return c;
}
