import "jasmine";
import EveningStar from "../../../patterns/bearish/EveningStar";
import { ICandle } from "../../../types";

describe("EveningStar (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 18.35, high: 21.6, close: 21.3, low: 18.13 },
      { open: 22.2, high: 22.7, close: 22.52, low: 21.87 },
      { open: 21.6, high: 22.05, close: 19.45, low: 19.3 }
    ];

    expect(EveningStar(input)).toBeTrue();
  });
});
