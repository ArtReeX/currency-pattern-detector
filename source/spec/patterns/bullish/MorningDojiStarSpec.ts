import "jasmine";
import MorningDojiStar from "../../../patterns/bullish/MorningDojiStar";
import { ICandle } from "../../../types";

describe("MorningDojiStar (bullish)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 22.2, high: 22.5, close: 20.8, low: 20.65 },
      { open: 20.3, high: 20.45, close: 20.3, low: 20.15 },
      { open: 20.7, high: 21.82, close: 21.58, low: 20.4 }
    ];

    expect(MorningDojiStar(input)).toBeTrue();
  });
});
