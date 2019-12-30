import "jasmine";
import MorningStar from "../../../patterns/bullish/MorningStar";
import { ICandle } from "../../../types";

describe("MorningStar (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 22.2, high: 22.5, close: 20.8, low: 20.65 },
      { open: 20.3, high: 20.45, close: 19.8, low: 19.6 },
      { open: 20.7, high: 21.82, close: 21.58, low: 20.4 }
    ];

    expect(MorningStar(input)).toBeTrue();
  });
});
