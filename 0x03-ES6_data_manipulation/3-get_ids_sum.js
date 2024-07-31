function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((sum, value) => sum + value.id, 0);
  }

  return 0;
}

export default getStudentIdsSum;
