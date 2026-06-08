/** @file  */

const aboutInfo = MRW.About();
basic.showString(aboutInfo);

const numberOfLeds = 30;
const neoPixelMode = NeoPixelMode.RGB;
const strip = neopixel.create(DigitalPin.P0, numberOfLeds, neoPixelMode);

MRW.setupGreenPurple(strip);
MRW.rotateForever(strip, 100);
