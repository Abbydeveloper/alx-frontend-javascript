export default function cleanSet(set, startString) {
  const newString = [];
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }
  for (const setVal of set.values()) {
    if (setVal.startsWith(startString, 0)) {
      newString.push(setVal.slice(startString.length));
    }
  }
  return newString.join('-');
}
