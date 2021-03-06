namespace MRW
{
    export function About(): string{ return "MRW extensions library" }
export function doBargraphLoopForever (s : neopixel.Strip) {
    let direction = 0
    let count = 0
    basic.forever(function () {
    count = count + direction
    if(count >= 30)
        direction = -1
    if(count <= 0)
        direction = 1
    basic.pause(5)
    //strip.rotate(1)
    s.showBarGraph(count, 30)
    s.show()
})
}
export function doRainbowLoopForever(s : neopixel.Strip) {
    let counter = 0
    basic.forever(function() {
        s.showRainbow(counter, counter + 75)
        counter++
        if (counter > 360) { counter = counter - 360 }
    })
}
export function setupGreenPurple (s : neopixel.Strip) {
    for (let index = 0; index <= 29; index++) {
        s.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
    }
    for(let index2 = 0; index2 < 30 ; ) {
        s.setPixelColor(index2, neopixel.colors(NeoPixelColors.Purple))
        index2 += 5
    }
    s.show()
}
export function setupRedWhiteBlue (s : neopixel.Strip) {
    let i = 0
    while (i < 30) {
        s.setPixelColor(2 + i, neopixel.colors(NeoPixelColors.Red))
        s.setPixelColor(1 + i, neopixel.colors(NeoPixelColors.White))
        s.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue))
        i = i + 3
    }
    s.show()
}
export function rotateForever(s : neopixel.Strip, pause:number = 5){
    basic.forever(function() {
        basic.pause(pause)
        s.rotate(1)
        s.show()
    })
}
}