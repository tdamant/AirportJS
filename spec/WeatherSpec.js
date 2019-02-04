describe("Weather", function() {

  it("should randomly decide weather", function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    weather = new Weather();
    expect(weather.set()).toEqual('Sunny');
  });

  it("should randomly decide weather", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    weather = new Weather();
    expect(weather.set()).toEqual('Stormy');
  });
});
