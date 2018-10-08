// Created a ship prototype
Ship.prototype = {
    getCurrentPort: function(){
        return _currentPort
    },
    // Created a setSail function
    setSail: function(){

        if (this.getCurrentPort().getWeather().isStormy()){
            throw new Error ("cannot sail on stormy weather");

        }
        this._currentPort = null;
    },
    // Created a dock function
    dock: function(arrivalPort){
        _currentPort = arrivalPort
    }
}
// Created a ship constructor
function Ship(port){
    _currentPort = port
   
    
}
