function cleanSet(set, startString) {
  if (startString !== '') {
    const result = Array.from(set)
      .filter((value) => value.startsWith(startString))
      .map((value) => value.slice(startString.length))
      .join('-');
    return result;
  }
  return '';
}

export default cleanSet;
