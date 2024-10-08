export default function hasValuesFromArray(set, arr) {
  return array.every((arrElem) => set.has(arrElem));
}
