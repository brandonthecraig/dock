// Assigned variables weather and port.
describe('Port', function(){
    let weather;
    let port;

    // Declaring new objects
    beforeEach (function (){
        weather = new Weather();
        port = new Port(weather);
    })
    // Testing that port has weather.
    it ('Has weather', function(){
        console.log(port);
        expect(port.getWeather()).toBe(weather);

    });
})