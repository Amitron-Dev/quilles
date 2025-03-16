function quilles (vd: number, vg: number, time: number) {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, vg)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, vd)
    basic.pause(time)
    Kitronik_Move_Motor.stop()
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    quilles(50, 70, 3000)
})
basic.forever(function () {
	
})
