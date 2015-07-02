function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var c = [];
  var x = 0;
  var temp;
  var tempn;
  var cou = 1;
  c[x] = {key:collection_a[0],count:cou};
  for(var i = 1;i < collection_a.length;i++)
  {
    temp = 0;
    for(var y = 0;y <= x;y++)
    {
      if(collection_a[i] === c[y].key)
      {
        cou++;
        temp = 1
        break;
      }
    }
    if(temp === 0)
    {
      cou = 1;
      x++;
    }
    c[x] = {key:collection_a[i],count:cou};
  }
  for(var i = 0;i < c.length;i++)
  {
    tempn = 0;
    for(var x = 0;x < object_b.value.length;x++)
    {
      if(c[i].key === object_b.value[x])
      {
        temp = c[i].count;
        while(temp > 2)
        {
          temp -= 3;
          c[i].count--;
        }
        tempn = 1;
      }
      if(tempn === 1)
      {
        break;
      }
    }
    result[i] = c[i];
  }
  return result;
}
