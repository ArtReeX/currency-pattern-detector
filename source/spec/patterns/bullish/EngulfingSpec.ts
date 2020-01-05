import "jasmine";
import Engulfing from "../../../patterns/bullish/Engulfing";
import { ICandle } from "../../../types";

describe("Engulfing (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 23.25, high: 25.1, close: 15.44, low: 14.82 },
      { open: 15.36, high: 30.87, close: 27.89, low: 14.93 }
    ];

    expect(Engulfing(input)).toBeTrue();
  });
});
