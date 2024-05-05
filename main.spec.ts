import { getAscendingArray, merge, mergeWithSorting } from "./main";

test("test merge with sorting", () => {
  const collection_2: number[] = [
    0, 1, 2, 3, 5, 6, 14, 19, 21, 22, 34, 56, 78, 99,
  ];
  const collection_3: number[] = [0, 1, 5, 15, 16, 23, 24, 62, 76, 78, 90, 100];
  const result = mergeWithSorting(collection_2, collection_3);
  expect(result).toEqual([
    0, 0, 1, 1, 2, 3, 5, 5, 6, 14, 15, 16, 19, 21, 22, 23, 24, 34, 56, 62, 76,
    78, 78, 90, 99, 100,
  ]);
});

test("test get ascending array", () => {
  let collection_1 = [100, 99, 55, 34, 20, 17, 8, 4, 1];
  // const reverse = collection_1.reverse()
  expect(getAscendingArray(collection_1)).toEqual(collection_1.reverse());
});

test("test merge with sorting reverse", () => {
  let collection_1 = [100, 99, 55, 34, 20, 17, 8, 4, 1];
  collection_1 = getAscendingArray(collection_1);
  let collection_2 = [0, 3, 12, 34, 40, 57, 68, 84, 91, 101];
  const result = mergeWithSorting(collection_2, collection_1);
  expect(result).toEqual([
    0, 1, 3, 4, 8, 12, 17, 20, 34, 34, 40, 55, 57, 68, 84, 91, 99, 100, 101,
  ]);
});

test("test merge", () => {
  const collection_1: number[] = [54, 33, 28, 26, 23, 20, 2, 1];
  const collection_2: number[] = [0, 1, 2, 3, 15, 26, 44];
  const collection_3: number[] = [0, 1, 5, 15, 161];

  const result = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([
    0, 0, 1, 1, 1, 2, 2, 3, 5, 15, 15, 20, 23, 26, 26, 28, 33, 44, 54, 161,
  ]);
});
