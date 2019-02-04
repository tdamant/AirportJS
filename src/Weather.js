function Weather() {}


Weather.prototype.set = function() {
let roll = Math.floor((Math.random()*6)+1)
if (roll === 1) {
  return "Stormy"
}
return "Sunny"
}
