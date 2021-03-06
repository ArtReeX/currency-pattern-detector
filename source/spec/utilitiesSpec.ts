import "jasmine";

import {
  isApproximateEqual,
  averageGain,
  averageLoss,
  percentageOf
} from "../utilities";

describe("utilities", () => {
  it("isApproximateEqual", () => {
    expect(isApproximateEqual(1.001 - 1.0, 2 - 1)).toBeTrue();
    expect(isApproximateEqual(1.3 - 1.0, 2 - 1)).toBeFalse();
  });

  it("averageGain", () => {
    const values = [
      44.3389,
      44.0902,
      44.1497,
      43.6124,
      44.3278,
      44.8264,
      45.0955,
      45.4245,
      45.8433,
      46.0826,
      45.8931,
      46.0328,
      45.614,
      46.282,
      46.282,
      46.0028,
      46.0328,
      46.4116,
      46.2222,
      45.6439,
      46.2122,
      46.2521,
      45.7137,
      46.4515,
      45.7835,
      45.3548,
      44.0288,
      44.1783,
      44.2181,
      44.5672,
      43.4205,
      42.6628,
      43.1314
    ];

    const result = [
      0.24,
      0.24,
      0.23,
      0.24,
      0.21,
      0.18,
      0.16,
      0.17,
      0.15,
      0.13,
      0.18,
      0.17,
      0.17,
      0.13,
      0.14,
      0.14,
      0.16,
      0.13,
      0.13
    ];

    expect(averageGain(values, 14, 2)).toEqual(result);
  });

  it("averageLoss", () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(averageLoss(values, 6, 2)).toEqual(result);
  });

  it("percentageOf", () => {
    expect(percentageOf(5, 100)).toEqual(5);
    expect(percentageOf(100, 100)).toEqual(100);
    expect(percentageOf(1, 100)).toEqual(1);
    expect(percentageOf(50, 100)).toEqual(50);
  });
});
