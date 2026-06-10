/** @file  */

const aboutInfo = MRW.About();
//basic.showString(aboutInfo);

const stripSize = 30;
const strip = neopixel.create(DigitalPin.P0, stripSize, NeoPixelMode.RGB);

//MRW.setupRedWhiteBlue(strip);
//MRW.setupGreenPurple(strip);
//MRW.rotateForever(strip, 100);
//MRW.doBargraphLoopForever(strip, 0);
//MRW.doRainbowLoopForever(strip, 0);

// flags
{
  let rotatingEnable = false;
  let flag: MRW.Flags = MRW.Flags.USA;
  const f = new MRW.FlagsTool(strip, stripSize);

  input.onButtonPressed(Button.A, () => {
    flag = MRW.Flags.USA;
    f.doFlagReset(flag);
  });
  input.onButtonPressed(Button.AB, () => {
    flag = MRW.Flags.France;
    f.doFlagReset(flag);
  });
  input.onButtonPressed(Button.B, () => {
    rotatingEnable = !rotatingEnable;
    if (rotatingEnable == false) {
      f.doFlagReset(flag);
    }
  });

  f.doFlagReset(flag);
  basic.forever(() => {
    basic.pause(400);
    if (rotatingEnable) {
      strip.rotate(1);
      strip.show();
    }
  });
}
