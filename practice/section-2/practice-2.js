function count_same_elements(collection) {
  var result = [];
  var y = 0;
  var cou = 0;
  var coll;
  result[y] = {key:collection[0][0],count:0};
  for(var i = 0;i < collection.length;i++)
  {
    if(collection[i].length === 1)
    {
      if(collection[i] === result[y].key)
      {
        result[y].count++;
      }
      else {
        result[++y]={key:collection[i],count:1}
      }
    }
    else {
      result[++y] = {key:collection[i][0],count:Number(collection[i][2])};
    }
  }
    return result;
}
