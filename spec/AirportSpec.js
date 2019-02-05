describe("airport", function() {

  it("Plane is stored in plane array when landing", function() {
    var weather = jasmine.createSpyObj('weather', {
      'isStormy': false
    })
    var airport = new Airport(weather);
    airport.land('plane');
    expect(airport.planes).toEqual(['plane']);
  });

it("it should the weather object whtthe weather is", function() {
  var weather = jasmine.createSpyObj('weather', {
    'isStormy': true
  })
  var airport = new Airport(weather);
  airport.land('plane');
  expect(airport.planes).toEqual([]);
});
});
