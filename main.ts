export function merge(
  collection_1: Array<number>,
  collection_2: Array<number>,
  collection_3: Array<number>
): Array<number> {
  // sort min to max of every array

  let array_1: number[] = getAscendingArray(collection_1);

  let sorted_2_3 = mergeWithSorting(collection_2, collection_3);

  return mergeWithSorting(sorted_2_3, array_1);
}

export function getAscendingArray(array: number[]): number[] {
  let result: number[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

export function mergeWithSorting(
  array_1: number[],
  array_2: number[]
): number[] {
  // using two pointer technique
  let i = 0; // array_1 pointer
  let j = 0; // array_2 pointer

  let result: number[] = [];
  while (i < array_1.length && j < array_2.length) {
    const value_1 = array_1[i];
    const value_2 = array_2[j];

    if (value_1 < value_2) {
      result.push(value_1);
      i++;
    } else if (value_1 > value_2) {
      result.push(value_2);
      j++;
    } else {
      // push both
      result.push(value_1);
      result.push(value_2);
      i++;
      j++;
    }
  }

  // if array_1 has left value, directly push them to result cause they're sorted
  while (i < array_1.length) {
    result.push(array_1[i]);
    i++;
  }

  // if array_2 has left value, directly push them to result cause they're sorted
  while (j < array_2.length) {
    result.push(array_2[j]);
    j++;
  }

  return result;
}
