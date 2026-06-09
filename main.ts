namespace MRW {
  /**
   * Returns information about the MRW extensions library.
   * @returns A string containing information about the library.
   */
  export function About(): string {
    return "MRW extensions library";
  }

  /**
   * Performs a bargraph animation on the specified neopixel strip.
   * @param s The neopixel strip to animate.
   */
  export function doBargraphLoopForever(
    s: neopixel.Strip,
    pause_ms: number = 0,
  ): void {
    let direction = 0;
    let count = 0;
    basic.forever(() => {
      count = count + direction;
      if (count >= 30) direction = -1;
      if (count <= 0) direction = 1;
      basic.pause(5);
      //strip.rotate(1)
      s.showBarGraph(count, 30);
      s.show();
      basic.pause(pause_ms);
    });
  }

  /**
   * Performs a rainbow animation on the specified neopixel strip.
   * @param s The neopixel strip to animate.
   */
  export function doRainbowLoopForever(
    s: neopixel.Strip,
    pause_ms: number = 0,
  ): void {
    let counter = 0;
    basic.forever(() => {
      s.showRainbow(counter, counter + 75);
      counter++;
      if (counter > 360) {
        counter = counter - 360;
      }
      basic.pause(pause_ms);
    });
  }

  /**
   * Sets up the neopixel strip with green and purple colors.
   * @param s The neopixel strip to configure.
   */
  export function setupGreenPurple(s: neopixel.Strip): void {
    for (let index = 0; index <= 29; index++) {
      s.setPixelColor(index, neopixel.colors(NeoPixelColors.Green));
    }
    for (let index2 = 0; index2 < 30; ) {
      s.setPixelColor(index2, neopixel.colors(NeoPixelColors.Purple));
      index2 += 5;
    }
    s.show();
  }

  /**
   * Sets up the neopixel strip with red, white, and blue colors.
   * @param s The neopixel strip to configure.
   */
  export function setupRedWhiteBlue(s: neopixel.Strip): void {
    let i = 0;
    while (i < 30) {
      s.setPixelColor(2 + i, neopixel.colors(NeoPixelColors.Red));
      s.setPixelColor(1 + i, neopixel.colors(NeoPixelColors.White));
      s.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue));
      i = i + 3;
    }
    s.show();
  }

  /**
   * Rotates the neopixel strip forever.
   * @param s The neopixel strip to rotate.
   * @param pause_ms The pause time [ms] between rotations.
   */
  export function rotateForever(s: neopixel.Strip, pause_ms: number = 5): void {
    basic.forever(() => {
      basic.pause(pause_ms);
      s.rotate(1);
      s.show();
    });
  }

  export enum Flag {
    USA,
    France,
  }
}
