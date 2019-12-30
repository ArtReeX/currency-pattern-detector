import "jasmine";
import SpinningTop from "../../../patterns/bearish/SpinningTop";
import { ICandle } from "../../../types";

describe("SpinningTop (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.62, high: 20.75, close: 20.5, low: 20.34 }
    ];

    expect(SpinningTop(input)).toBeTrue();
  });
});
