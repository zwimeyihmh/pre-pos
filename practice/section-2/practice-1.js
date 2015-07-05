function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var cou=1;
  var y = 0;
  result[y] = {key:collection[0],count:cou};
  for(var i = 1 ;i < collection.length;i++)
	{
	  /*

	  var temp = 0;
	  for(var x = 0;x <= y;x++)
		{
	        if(collection[i] === result[x].key)
	       {
		      cou++;
			  temp = 1;
		      break;
	       }
		}
		if(temp === 0)
		{
			cou=1;
			y++;
		}
		*/
		if(collection[i] === result[y].key)
		{
			//result[y].count++;
			cou++;
	    }
		else
		{
		//	result[++y].key = collection[i];
		//	result[y].count = 1;
		    cou=1;
			y++;
		}
	    result[y] = {key:collection[i],count:cou};
    }
	return result;
}
