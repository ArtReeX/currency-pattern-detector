import "jasmine";
import ThreeWhiteSoldiers from "../../../patterns/bullish/ThreeWhiteSoldiers";
import { ICandle } from "../../../types";

describe("ThreeWhiteSoldiers (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 21.12, high: 21.65, close: 21.83, low: 20.85 },
      { open: 21.48, high: 22.2, close: 22.4, low: 21.36 },
      { open: 21.8, high: 22.65, close: 22.8, low: 21.66 }
    ];

    expect(ThreeWhiteSoldiers(input)).toBeTrue();
  });
});
