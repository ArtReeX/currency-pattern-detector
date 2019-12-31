import "jasmine";
import TweezerTop from "../../../patterns/bearish/TweezerTop";
import { ICandle } from "../../../types";

describe("TweezerTop (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
      { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
      { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
      { open: 40.9, high: 43.1, close: 42.8, low: 39.1 },
      { open: 42.8, high: 43.1, close: 38.05, low: 37.5 }
    ];

    expect(TweezerTop(input)).toBeTrue();
  });
});
