function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var temp=0;
  for(var i = 0;i < collection_a.length;i++)
  {
	  for(var x = 0;x < object_b.value.length;x++)
	  {
		  if(object_b.value[x] === collection_a[i])
		  {
			  result[temp]=collection_a[i];
			  temp++;
			  break;
		  }
	  }
	  if(temp === object_b.value.length)
	  {
		  break;
	  }
  }
  return result;
}
