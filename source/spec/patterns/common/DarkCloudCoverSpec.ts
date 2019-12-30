import "jasmine";
import DarkCloudCover from "../../../patterns/common/DarkCloudCover";
import { ICandle } from "../../../types";

describe("DarkCloudCover (common)", () => {
  it("default", () => {
    const input: ICandle[] = [
      { open: 30.1, high: 37.4, close: 35.36, low: 28.3 },
      { open: 39.45, high: 41.45, close: 32.5, low: 31.25 }
    ];

    expect(DarkCloudCover(input)).toBeTrue();
  });
});
