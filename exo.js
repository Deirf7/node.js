function fusion(array1, array2) {
  let i = 0;
  let j = 0;
  let merged_array = [];
  while (i < array1.length , j < array2.length) {
    if (array1[i] < array2[j]) {
      merged_array.push(array1[i]);
      i++;
    } else {
      merged_array.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    merged_array.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    merged_array.push(array2[j]);
    j++;
  }
  
  return merged_array;
}
let array1 = [10, 20, 30];
let array2 = [15, 25, 35];
let merged_array = fusion(array1, array2);
console.log(merged_array);
