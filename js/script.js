var startClock = function() {
  // Declare Key Elements
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    
    var hexHrs = h.toString(16)
    var hexMins = m.toString(16)
    var hexSecs = s.toString(16)
    
    h = addZero(h)
    m = addZero(m)
    s = addZero(s)

    hexHrs = addString(hexHrs)
    hexMins = addString(hexMins)
    hexSecs = addString(hexSecs)

  
 // Write to DOM Elements
    
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s
    var hexContainer = document.querySelector("#hex-value")
    var hexColor = hexHrs + ":" + hexMins + ":" + hexSecs 
    hexContainer.innerHTML = hexColor
    
 // Set Timeout
    setTimeout(startClock, 400)
   
}

//Declare Functions/Tools
var addZero = function(i) {
    if (i < 10) {
    i = "0" + i
    }  
    return i
}

var addString = function(s){
    if(s.length <= 1){
        s = "0" + s
    }
    return s
}
    


