function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var temp = 0;
  var tempn = 0;
  var t = 0;
for(var x = 0;x < collection_b.length;x++)
{
	for(var y = 0;y < collection_b[x].length;y++)
		{
		tempn++;
		 }
}
for(var i = 0;i < collection_a.length;i++)
  {
	  for(var x = 0;x < collection_b.length;x++)
	  {
		  for(var y = 0;y < collection_b[x].length;y++)
		  {
			  if(collection_b[x][y] === collection_a[i])
			  {
				  result[temp]=collection_a[i];
				  temp++;
          t = 1;
				  break;
			  }
		  }
      if(t === tempn)
      {
        break;
      }
	  }
	  if(tempn===temp)
	  {
		  break;
	  }
  }
  return result;
}
