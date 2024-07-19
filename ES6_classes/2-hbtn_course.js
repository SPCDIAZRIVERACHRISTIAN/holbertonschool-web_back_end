export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be an integer');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students is not an array');
    }
    if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('Expected items to be string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  SetCourse(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be an integer');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students is not an array');
    }
    if (!students.every((item) => typeof item === 'string')) {
      throw new TypeError('Expected items to be string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  GetCourse() {
    return this._name, this._length, this._students;
  }
}
