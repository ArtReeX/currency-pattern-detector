import "jasmine";
import Engulfing from "../../../patterns/bearish/Engulfing";
import { ICandle } from "../../../types";

describe("Engulfing (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 21.44, high: 25.1, close: 23.25, low: 20.82 },
      { open: 27.89, high: 30.87, close: 15.36, low: 14.93 }
    ];

    expect(Engulfing(input)).toBeTrue();
  });
});
