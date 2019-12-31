import "jasmine";
import HammerPatternUnconfirmed from "../../../patterns/bullish/HammerPatternUnconfirmed";
import { ICandle } from "../../../types";

describe("HammerPatternUnconfirmed (bullish)", () => {
  it("Bearish", () => {
    const input: ICandle[] = [
      { open: 44.0, high: 45.0, close: 42.0, low: 38.0 },
      { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
      { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
      { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
      { open: 30.1, high: 30.1, close: 26.13, low: 10.06 }
    ];

    expect(HammerPatternUnconfirmed(input)).toBeTrue();
  });

  it("Bearish Inverted", () => {
    const input: ICandle[] = [
      { open: 44.0, high: 45.0, close: 42.0, low: 38.0 },
      { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
      { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
      { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
      { open: 29.1, high: 36.1, close: 26.13, low: 26.13 }
    ];

    expect(HammerPatternUnconfirmed(input)).toBeTrue();
  });

  it("Bullish", () => {
    const input: ICandle[] = [
      { open: 44.0, high: 45.0, close: 42.0, low: 38.0 },
      { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
      { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
      { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
      { open: 26.13, high: 30.1, close: 30.1, low: 10.06 }
    ];

    expect(HammerPatternUnconfirmed(input)).toBeTrue();
  });

  it("Bullish Inverted", () => {
    const input: ICandle[] = [
      { open: 44.0, high: 45.0, close: 42.0, low: 38.0 },
      { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
      { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
      { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
      { open: 26.13, high: 36.1, close: 29.1, low: 26.13 }
    ];

    expect(HammerPatternUnconfirmed(input)).toBeTrue();
  });
});
