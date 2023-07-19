// Implement a function called filter which accepts an array and a callback function.
// The callback be invoked for each element of the input array.
// If the callback returns true, the element will be added to a new array.
// The filter function should return the new array with only the elements that pass
// the predicate function

export default function filter<T>(array: Array<T>, callback: (el: T) => boolean): Array<T> {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const el = array[i]
    if (callback(el)) {
      result.push(el);
    }
  }
  return result;
}
