import "jasmine";
import SpinningTop from "../../../patterns/bearish/SpinningTop";
import { ICandle } from "../../../types";

describe("SpinningTop (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.7, high: 21.0, close: 20.3, low: 20.0 }
    ];

    expect(SpinningTop(input)).toBeTrue();
  });
});
