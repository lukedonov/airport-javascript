'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it("lands a plane", function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from the airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});