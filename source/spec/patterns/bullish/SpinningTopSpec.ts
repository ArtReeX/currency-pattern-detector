import "jasmine";
import SpinningTop from "../../../patterns/bearish/SpinningTop";
import { ICandle } from "../../../types";

describe("SpinningTop (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.5, high: 20.87, close: 20.62, low: 20.23 }
    ];

    expect(SpinningTop(input)).toBeTrue();
  });
});
