import "jasmine";
import InvertedHammerStick from "../../../patterns/bearish/InvertedHammerStick";
import { ICandle } from "../../../types";

describe("InvertedHammerStick (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 30.1, high: 52.06, close: 26.13, low: 26.13 }
    ];

    expect(InvertedHammerStick(input)).toBeTrue();
  });
});
