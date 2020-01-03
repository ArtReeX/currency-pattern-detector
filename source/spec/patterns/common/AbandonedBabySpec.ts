import "jasmine";
import AbandonedBaby from "../../../patterns/common/AbandonedBaby";
import { ICandle } from "../../../types";

describe("AbandonedBaby (common)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 31.1, high: 31.8, close: 28.1, low: 27.5 },
      { open: 26.18, high: 26.91, close: 26.18, low: 25.45 },
      { open: 27.47, high: 30.94, close: 30.62, low: 27.02 }
    ];

    expect(AbandonedBaby(input)).toBeTrue();
  });
});
