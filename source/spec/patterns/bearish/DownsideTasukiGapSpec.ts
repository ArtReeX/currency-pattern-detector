import "jasmine";
import DownsideTasukiGap from "../../../patterns/bearish/DownsideTasukiGap";
import { ICandle } from "../../../types";

describe("DownsideTasukiGap (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 45.0, high: 46.2, close: 41.2, low: 38.56 },
      { open: 33.45, high: 34.7, close: 29.31, low: 28.0 },
      { open: 30.2, high: 36.63, close: 36.28, low: 29.8 }
    ];

    expect(DownsideTasukiGap(input)).toBeTrue();
  });
});
