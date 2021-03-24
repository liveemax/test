/** @format */

const randomPosition = (arr: Array<string>): Array<string> => {
  const rand = Math.ceil(Math.random() * 4);
  for (let i = 0; i < rand; i += 1) {
    arr.unshift(arr.pop()!);
  }
  return arr;
};
export default randomPosition;
