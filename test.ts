// tests go here; this will not be compiled when this package is used as an extension.
MRW.About()
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
MRW.setupGreenPurple(strip)
MRW.rotateForever(strip,100)
