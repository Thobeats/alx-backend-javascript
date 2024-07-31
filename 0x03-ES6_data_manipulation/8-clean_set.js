function cleanSet(set, startStr) {
  if (
    !set && !startStr && !(set instanceof Set) && typeof startStr !== 'string'
  ) {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startStr)) {
      const valueSubStr = value.substring(startStr.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}

export default cleanSet;
