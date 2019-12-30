"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const utilities_1 = require("../utilities");
describe("utilities", () => {
    it("approximateEqual", () => {
        expect(utilities_1.approximateEqual(1, 1.001)).toBeTrue();
    });
});
//# sourceMappingURL=utilitiesSpec.js.map