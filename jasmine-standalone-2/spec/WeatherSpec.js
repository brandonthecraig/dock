// "weather"
describe ('Weather', function() {
    let weather

    // new weather
    beforeEach(function() {
        weather = new Weather()
    })
    
    //"can be stormy"
    it ('can be stormy', function(){
        spyOn(Math, 'random').and.returnValue(0);

        expect(weather.isStormy()).toBe(true);
    });
    
    //"can be nice"
    it('can be nice', function(){
        spyOn(Math, 'random').and.returnValue(1);

        expect(weather.isStormy()).toBe(false);
    })
    
})