import "jasmine";
import HangingManUnconfirmed from "../../../patterns/bearish/HangingManUnconfirmed";
import { ICandle } from "../../../types";

describe("HangingManUnconfirmed (bullish)", () => {
  it("Bearish", () => {
    const input: ICandle[] = [
      { open: 28.9, high: 36.1, close: 29.5, low: 27.0 },
      { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
      { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
      { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
      { open: 42.8, high: 42.8, close: 40.9, low: 33.1 }
    ];

    expect(HangingManUnconfirmed(input)).toBeTrue();
  });

  it("Bullish", () => {
    const input: ICandle[] = [
      { open: 28.9, high: 36.1, close: 29.5, low: 27.0 },
      { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
      { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
      { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
      { open: 40.9, high: 42.8, close: 42.8, low: 33.1 }
    ];

    expect(HangingManUnconfirmed(input)).toBeTrue();
  });
});
