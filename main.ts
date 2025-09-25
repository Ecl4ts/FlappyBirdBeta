loops.everyInterval(200, function () {
    datalogger.log(datalogger.createCV("logo up", "logo up is " + input.isGesture(Gesture.LogoUp)))
    datalogger.log(datalogger.createCV("logo down", "logo down is " + "World"))
    datalogger.log(datalogger.createCV("tilt left", "tilt left is " + input.isGesture(Gesture.TiltLeft)))
    datalogger.log(datalogger.createCV("tilt right", "tilt right is " + input.isGesture(Gesture.TiltRight)))
})
loops.everyInterval(100, function () {
    if (input.isGesture(Gesture.LogoDown)) {
        turtle.forward(1)
    } else {
        turtle.back(1)
    }
})
