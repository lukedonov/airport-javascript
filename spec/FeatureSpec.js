describe("Feature Test:", function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    
    it("planes can be told to land at airport", function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff', function(){
      plane.land(airport)
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){

    it('blocks takeoff when the weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });
  });
}); 