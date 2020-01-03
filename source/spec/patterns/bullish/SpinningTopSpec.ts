import "jasmine";
import SpinningTop from "../../../patterns/bullish/SpinningTop";
import { ICandle } from "../../../types";

describe("SpinningTop (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.3, high: 21.0, close: 20.7, low: 20.0 }
    ];

    expect(SpinningTop(input)).toBeTrue();
  });
});
