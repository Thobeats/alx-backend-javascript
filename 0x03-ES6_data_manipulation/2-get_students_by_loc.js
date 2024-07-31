function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter((obj) => obj.location === city, city);
  }
  return [];
}

export default getStudentsByLocation;
