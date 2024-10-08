export default function hasValuesFromArray(set, arr) {
  return arr.every((arrElem) => set.has(arrElem));
}
