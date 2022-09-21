basic.forever(function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("¡vamos a esquiar!")
    } else if (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("hagamos un picnic")
    } else if (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("vamos a la playa")
    } else if (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("mejor no salgas")
    } else {
        basic.showNumber(input.temperature())
    }
})
