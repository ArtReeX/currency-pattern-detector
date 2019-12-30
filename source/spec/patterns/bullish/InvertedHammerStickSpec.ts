import "jasmine";
import InvertedHammerStick from "../../../patterns/bullish/InvertedHammerStick";
import { ICandle } from "../../../types";

describe("InvertedHammerStick (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 26.13, high: 52.06, close: 30.1, low: 26.13 }
    ];

    expect(InvertedHammerStick(input)).toBeTrue();
  });
});
