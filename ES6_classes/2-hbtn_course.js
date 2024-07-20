export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw TypeError('name must be string');
    }
    if (typeof (length) !== 'number') {
      throw TypeError('length must be int');
    }
    if (Array.isArray(students) !== true && typeof (students[0] !== 'string')) {
      throw TypeError('students must be a array of strings');
    }
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw TypeError('name must be string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw TypeError('lenght must be inst');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students) !== true && typeof (students[0] !== 'string')) {
      throw TypeError('students must be a array of strings');
    }
    this._students = students;
  }
}
