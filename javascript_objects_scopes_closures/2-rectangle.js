class Rectangle {
  constructor(w, h) {
    if (
      typeof w === 'number' && w > 0 &&
      typeof h === 'number' && h > 0
    ) {
      this.width = w
      this.height = h
    }
    // If w or h is 0 or not a positive number, do nothing (empty object)
  }
}

module.exports = Rectangle
