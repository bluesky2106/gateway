radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    serial.writeNumber(receivedNumber)
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    radio.sendString(cmd)
})
let cmd = ""
radio.setGroup(77)
serial.redirectToUSB()
