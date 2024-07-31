function getListStudentIds(objectArray) {
  let mappedArray = [];

  if (objectArray instanceof Array) {
    mappedArray = objectArray.map((obj) => obj.id); //
  }

  return mappedArray;
}

export default getListStudentIds;
