import "jasmine";

import { approximateEqual } from "../utilities";

describe("utilities", () => {
  it("approximateEqual", () => {
    expect(approximateEqual(1, 1.001)).toBeTrue();
    expect(approximateEqual(10, 10.01)).toBeTrue();
    expect(approximateEqual(100, 100.1)).toBeTrue();
    expect(approximateEqual(1000, 1001)).toBeTrue();
    expect(approximateEqual(10000, 10010)).toBeTrue();
  });
});
