// Created a ship prototype
Ship.prototype = {
    getCurrentPort: function(){
        return this._currentPort
    },
    // Created a setSail function
    setSail: function(){

        if (this.getCurrentPort().getWeather().isStormy()){
            throw new Error ("cannot sail on stormy weather");

        }
        this._currentPort = null;
    },
    // Created a dock function
    dock: function(port){
        if (port._getCapacity > port._ships.length){
            this._currentPort = port
            port.addShip(this);
        }
        else {
            throw new Error ("port is at capacity")
        }
        
    }
}
// Created a ship constructor
function Ship(port){
    this._currentPort = port
   
    
}
