import "jasmine";
import DragonFlyDoji from "../../../patterns/common/DragonFlyDoji";
import { ICandle } from "../../../types";

describe("DragonFlyDoji (common)", () => {
  it("default", () => {
    const trueInput: ICandle[] = [
      { open: 30.13, high: 30.13, close: 29.9, low: 25.1 }
    ];

    expect(DragonFlyDoji(trueInput)).toBeTrue();
  });
});
