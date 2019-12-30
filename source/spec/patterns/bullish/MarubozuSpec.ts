import "jasmine";
import Marubozu from "../../../patterns/bullish/Marubozu";
import { ICandle } from "../../../types";

describe("Marubozu (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 30.5, high: 31.23, close: 31.23, low: 30.5 }
    ];

    expect(Marubozu(input)).toBeTrue();
  });
});
