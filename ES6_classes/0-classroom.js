export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  maxStudentSize(Number) {
    this._maxStudentsSize = Number;
  }

  getMaxStudentSize() {
    return this._maxStudentsSize;
  }
}
