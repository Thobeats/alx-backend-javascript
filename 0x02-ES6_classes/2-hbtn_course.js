class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (!(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set length(length) {
    if (!(length instanceof Number)) {
      throw new TypeError('Length must be a string');
    }
    this._length = length; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array');
    }

    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }
}

export default HolbertonCourse;
