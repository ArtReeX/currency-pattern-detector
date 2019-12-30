"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Harami_1 = __importDefault(require("../../../patterns/bearish/Harami"));
describe("Harami (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 20.12, high: 23.82, close: 23.5, low: 19.88 },
            { open: 22.13, high: 22.76, close: 21.7, low: 21.31 }
        ];
        expect(Harami_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=HaramiSpec.js.map