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

  /**
   * Defines the available flags for the FlagsTool class.
   */
  export enum Flags {
    USA,
    France,
  }

  /**
   * A tool for displaying flags on a neopixel strip.
   */
  export class FlagsTool {
    private s: neopixel.Strip;
    private stripSize: number;

    /**
     *
     * @param s A neopixel strip to be used for displaying flags
     * @param stripSize The size of the neopixel strip, which determines how many pixels are available for displaying the flags
     */
    constructor(s: neopixel.Strip, stripSize: number) {
      this.s = s;
      this.stripSize = stripSize;
    }

    /**
     * Resets the flag display on the neopixel strip based on the specified flag type.
     * @param flag The flag type to display. If not provided, it defaults to the USA flag.
     * The method uses a switch statement to determine which flag to display based on the provided flag type. It sets the appropriate colors for each pixel on the strip to create the desired flag pattern, and then calls the show method to update the display.
     */
    public doFlagReset(flag: Flags = Flags.USA): void {
      switch (flag) {
        default:
        case Flags.USA:
          this.s.showColor(neopixel.colors(NeoPixelColors.Blue));
          for (
            let index = this.stripSize - 1;
            index > this.stripSize / 3 + 1;
            index -= 2
          ) {
            this.s.setPixelColor(index, neopixel.colors(NeoPixelColors.Red));
            this.s.setPixelColor(
              index - 1,
              neopixel.colors(NeoPixelColors.White),
            );
          }

          this.s.setPixelColor(
            this.stripSize / 3 + 1,
            neopixel.colors(NeoPixelColors.Red),
          );
          break;

        case Flags.France:
          for (let index2 = 0; index2 <= this.stripSize - 1; index2++) {
            let color: NeoPixelColors;
            if (index2 >= (this.stripSize * 2) / 3) {
              color = NeoPixelColors.Red;
            } else if (index2 >= this.stripSize / 3) {
              color = NeoPixelColors.White;
            } else {
              color = NeoPixelColors.Blue;
            }

            this.s.setPixelColor(index2, neopixel.colors(color));
          }

          break;
      }

      this.s.show();
    }
  }
}
