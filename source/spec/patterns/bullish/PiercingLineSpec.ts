import "jasmine";
import PiercingLine from "../../../patterns/bullish/PiercingLine";
import { ICandle } from "../../../types";

describe("PiercingLine (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 42.7, high: 42.82, close: 41.6, low: 41.45 },
      { open: 41.33, high: 42.5, close: 42.34, low: 41.15 }
    ];

    expect(PiercingLine(input)).toBeTrue();
  });
});
