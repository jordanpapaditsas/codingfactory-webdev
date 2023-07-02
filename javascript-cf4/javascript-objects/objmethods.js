const point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`
  },
  valueOf: function() {
    return Math.hypot(this.x, this.y).toFixed(2);
  }
};

console.log(point.toString());
let distanceFromZero = Number(point);
console.log(distanceFromZero);