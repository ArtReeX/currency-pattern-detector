import "jasmine";
import DragonFlyDoji from "../../../patterns/common/DragonFlyDoji";
import { ICandle } from "../../../types";

describe("DragonFlyDoji (common)", () => {
  it("default", () => {
    const trueInput: ICandle[] = [
      { open: 30.1, high: 30.1, close: 30.13, low: 28.1 }
    ];

    expect(DragonFlyDoji(trueInput)).toBeTrue();
  });
});
