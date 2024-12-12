const addressLat = 10;
const addressLong = 18;
const positionLat = 6;
const positionLong = 8;

const deltaX = addressLong - positionLong
const deltaY = addressLat - positionLat

const result = Math.sqrt(deltaX ** 2 + deltaY ** 2)

console.log(`Дистанция до желаемой точки: ${result}`)