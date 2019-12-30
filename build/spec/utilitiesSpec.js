"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const utilities_1 = require("../utilities");
describe("utilities", () => {
    it("approximateEqual", () => {
        expect(utilities_1.approximateEqual(1, 1.001)).toBeTrue();
        expect(utilities_1.approximateEqual(10, 10.01)).toBeTrue();
        expect(utilities_1.approximateEqual(100, 100.1)).toBeTrue();
        expect(utilities_1.approximateEqual(1000, 1001)).toBeTrue();
        expect(utilities_1.approximateEqual(10000, 10010)).toBeTrue();
    });
});
//# sourceMappingURL=utilitiesSpec.js.map