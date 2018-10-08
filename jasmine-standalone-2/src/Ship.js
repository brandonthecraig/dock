// Created a ship prototype
Ship.prototype = {
    getCurrentPort: function(){
        return _currentPort
    },
    // Created a setSail function
    setSail: function(){
        _currentPort = null
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
