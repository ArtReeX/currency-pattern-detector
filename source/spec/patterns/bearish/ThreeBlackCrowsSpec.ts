import "jasmine";
import ThreeBlackCrows from "../../../patterns/bearish/ThreeBlackCrows";
import { ICandle } from "../../../types";

describe("ThreeBlackCrows (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 21.65, high: 21.82, close: 21.32, low: 21.25 },
      { open: 21.48, high: 21.57, close: 21.1, low: 20.97 },
      { open: 21.25, high: 21.35, close: 20.7, low: 20.6 }
    ];

    expect(ThreeBlackCrows(input)).toBeTrue();
  });
});
