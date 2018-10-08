// Assigned port, ship, and arrivalPort
describe ('Ship', function() {
    let port;
    let ship;
    let arrivalPort;

// Declaring we have a new port, ship, arrivalPor (new objects).
    beforeEach(function() {
        port = new Port();
        ship = new Ship(port);
        arrivalPort = new Port();

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

    });