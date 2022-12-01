let hum = 0
let temp = 0
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    OLED.clear()
    temp = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
    OLED.writeString("Temperature(C): ")
    OLED.writeNum(temp)
    OLED.newLine()
    hum = Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)
    OLED.writeString("Humidity(0~100): ")
    OLED.writeNum(hum)
    if (20 < temp) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    basic.pause(2000)
})
