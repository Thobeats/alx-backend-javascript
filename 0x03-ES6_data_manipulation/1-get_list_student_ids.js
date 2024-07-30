function getListStudentIds(objectArray) {
  if (typeof objectArray !== 'object') {
    return [];
  }

  return objectArray.map((obj) => obj.id);
}

export default getListStudentIds;
