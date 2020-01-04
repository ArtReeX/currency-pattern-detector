import "jasmine";
import TweezerBottom from "../../../patterns/bullish/TweezerBottom";
import { ICandle } from "../../../types";

describe("TweezerBottom (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
      { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
      { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
      { open: 31.6, high: 31.6, close: 29.1, low: 20.1 },
      { open: 29.12, high: 33.6, close: 31.6, low: 20.1 }
    ];

    expect(TweezerBottom(input)).toBeTrue();
  });
});
