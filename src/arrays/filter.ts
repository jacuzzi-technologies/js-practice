// Implement a function called filter which accepts an array and a callback function.
// The callback be invoked for each element of the input array.
// If the callback returns true, the element will be added to a new array.
// The filter function should return the new array with only the elements that pass
// the predicate function

// https://lodash.com/docs/4.17.15#filter

// const evens = filter([1,2,3], n => n % 2 === 0); // [2]
// const odds = filter([2,4,6], n => n % 2 !== 0);  // []

// **REMOVE THIS LINE**
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function filter<T>(array: Array<T>, callback: (el: T) => boolean): Array<T> {
  // do stuff
  return [];
}
