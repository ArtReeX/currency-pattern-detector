import "jasmine";
import Harami from "../../../patterns/bullish/Harami";
import { ICandle } from "../../../types";

describe("Harami (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 25.13, high: 25.8, close: 22.14, low: 21.7 },
      { open: 23.45, high: 24.59, close: 24.1, low: 23.07 }
    ];

    expect(Harami(input)).toBeTrue();
  });
});
