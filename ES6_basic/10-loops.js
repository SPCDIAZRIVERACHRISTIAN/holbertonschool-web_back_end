export default function appendToEachArrayValue(array, appendString) {
    for (const key in array) {
      if (Object.prototype.hasOwnProperty.call(array, key)) {
        array[key] = appendString + array[key];
      }
    }

    return array;
  }
