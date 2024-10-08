export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const buffValue = new DataView(arr);

  try {
    buffValue.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }

  return buffValue;
}
