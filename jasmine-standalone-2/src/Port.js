//Creating a constructor
function Port(weather) {
    this._weather = weather;
}

//Creating a prototype
Port.prototype = {
    getWeather: function(){
        return this._weather;
    }
}
