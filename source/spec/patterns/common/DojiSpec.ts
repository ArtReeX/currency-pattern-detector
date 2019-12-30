import "jasmine";
import Doji from "../../../patterns/common/Doji";
import { ICandle } from "../../../types";

describe("Doji (common)", () => {
  it("default", () => {
    const firstInput: ICandle[] = [
      { open: 30.1, high: 32.1, close: 30.13, low: 28.1 }
    ];
    const secondInput: ICandle[] = [
      { open: 30.1, high: 30.11, close: 30.1, low: 30.09 }
    ];

    expect(Doji(firstInput)).toBeTrue();
    expect(Doji(secondInput)).toBeTrue();
  });
});
