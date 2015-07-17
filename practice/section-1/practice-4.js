function findSame(elementA, elementB) {
  for (var x = 0; x < elementB.length; x++) {
    if (elementA === elementB[x]) {
      return elementA;
    }
  }
  return undefined;
}

function collect_same_elements(collection_a, object_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var temp;
    temp = findSame(collection_a[i].key, object_b.value);
    if (temp) {
      result.push(temp);
    }
  }
  return result;
}
