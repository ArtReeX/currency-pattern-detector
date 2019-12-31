import "jasmine";
import HammerStick from "../../../patterns/bearish/HammerStick";
import { ICandle } from "../../../types";

describe("HammerStick (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 30.1, high: 30.1, close: 26.13, low: 10.06 }
    ];

    expect(HammerStick(input)).toBeTrue();
  });
});
