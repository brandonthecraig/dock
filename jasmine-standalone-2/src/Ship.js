Ship.prototype = {
    getCurrentPort: function(){
        return _currentPort
    },
}

function Ship(port){
    _currentPort = port
}