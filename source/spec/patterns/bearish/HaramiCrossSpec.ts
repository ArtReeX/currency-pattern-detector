import "jasmine";
import HaramiCross from "../../../patterns/bearish/HaramiCross";
import { ICandle } from "../../../types";

describe("HaramiCross (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.12, high: 23.82, close: 23.5, low: 19.88 },
      { open: 22.1, high: 22.6, close: 22.1, low: 21.6 }
    ];

    expect(HaramiCross(input)).toBeTrue();
  });
});
