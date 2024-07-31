function getListStudentIds(objectArray) {
  if (objectArray instanceof Array) {
    return objectArray.map((obj) => obj.id); //
  }

  return [];
}

export default getListStudentIds;
