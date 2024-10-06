export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot deivide by 0');
  }
  return (numerator / denominator);
}
