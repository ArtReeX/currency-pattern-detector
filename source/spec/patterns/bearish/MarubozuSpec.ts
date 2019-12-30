import "jasmine";
import Marubozu from "../../../patterns/bearish/Marubozu";
import { ICandle } from "../../../types";

describe("Marubozu (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 31.23, high: 31.23, close: 30.5, low: 30.5 }
    ];

    expect(Marubozu(input)).toBeTrue();
  });
});
