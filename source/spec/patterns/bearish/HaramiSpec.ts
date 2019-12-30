import "jasmine";
import Harami from "../../../patterns/bearish/Harami";
import { ICandle } from "../../../types";

describe("Harami (bearish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 20.12, high: 23.82, close: 23.5, low: 19.88 },
      { open: 22.13, high: 22.76, close: 21.7, low: 21.31 }
    ];

    expect(Harami(input)).toBeTrue();
  });
});
