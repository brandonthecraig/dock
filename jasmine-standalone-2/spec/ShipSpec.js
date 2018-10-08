// Assigned port, ship, and arrivalPort
describe ('Ship', function() {
    let port;
    let ship;
    let arrivalPort;
    let weather;

// Declaring we have a new port, ship, arrivalPort (new objects).
    beforeEach(function() {
        port = new Port(weather);
        ship = new Ship(port);
        arrivalPort = new Port();
        weather = new Weather();

    });

    // Running tests -
    // Expecting the ship's port toBe port 
    it('has a starting port', function() {

            expect(ship.getCurrentPort()).toBe(port);
    })
    
    // As the ship is setting sale getCurrentPort is falsy as the ship isn't at a port
    it('Can set sail from the port', function(){
        ship.setSail();

        expect(ship.getCurrentPort()).toBeFalsy();
    
    })

    // Expecting the ship's currentPort to now be arrivalPort as we are the ship.dock function 
    it('Can dock at a port', function(){
        ship.dock(arrivalPort);

        expect(ship.getCurrentPort()).toBe(arrivalPort);

    })

    it('Does not set sail in stormy weather', function(){
        spyOn(weather,'isStormy').and.returnValue(false);

        ship.setSail():

        expect(ship.getCurrentPort()).toBeFalsy();
    }) 
    });