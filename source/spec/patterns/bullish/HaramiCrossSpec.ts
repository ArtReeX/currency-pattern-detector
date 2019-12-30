import "jasmine";
import HaramiCross from "../../../patterns/bullish/HaramiCross";
import { ICandle } from "../../../types";

describe("HaramiCross (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 25.13, high: 25.8, close: 22.14, low: 21.7 },
      { open: 23.45, high: 24.59, close: 23.45, low: 23.07 }
    ];

    expect(HaramiCross(input)).toBeTrue();
  });
});
