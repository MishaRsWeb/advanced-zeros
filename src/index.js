module.exports = function getZerosCount(number, base) {
var zerosCount = Number.MAX_VALUE;
var b = base;
  for (var i = 2; i <= base; i++) {
    if (b % i === 0) {
var a = 0;
      while (b % i === 0) {
         b = b / i;     
         a++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      zerosCount = Math.min(zerosCount, Math.floor(c / a))
    }
  }
  return zerosCount;
}