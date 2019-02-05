function Airport(weather = new Weather){

  this.planes = [];
  this.weather = weather;

};

Airport.prototype.land = function(plane) {
  // this.weather.isStormy() ? return : this.planes.push(plane);
 if (this.weather.isStormy()) {
  
} else {
  this.planes.push(plane);
}
};
