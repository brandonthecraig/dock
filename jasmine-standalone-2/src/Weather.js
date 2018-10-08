function Weather (){
    _NOT_STORMY_PROBABILITY = 0.5;

}

Weather.prototype =  {
    isStormy: function(){
        return (Math.random() < _NOT_STORMY_PROBABILITY)
    }
}
