// Assigned variables weather and port.
describe('Port', function(){
    let weather;
    let port;
    let ship;

    // Declaring new objects
    beforeEach (function (){
        weather = new Weather();
        port = new Port(weather);
        ship = new Ship(port);
    })

    // Testing that port has weather.
    it ('Has weather', function(){
        expect(port.getWeather()).toBe(weather);
    });

    it ('can add ships', function(){
        port.addShip(ship)

        expect(port.getShips()).toContain(ship)

    })

    it ('has a capacity', function(){
        expect(port.getCapacity()).toBe(8)
    })
})