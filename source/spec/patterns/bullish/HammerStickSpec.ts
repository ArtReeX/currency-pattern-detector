import "jasmine";
import HammerStick from "../../../patterns/bullish/HammerStick";
import { ICandle } from "../../../types";

describe("HammerStick (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 26.13, high: 30.1, close: 30.1, low: 10.06 }
    ];

    expect(HammerStick(input)).toBeTrue();
  });
});
