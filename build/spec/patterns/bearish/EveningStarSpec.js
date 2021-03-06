"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const EveningStar_1 = __importDefault(require("../../../patterns/bearish/EveningStar"));
describe("EveningStar (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 18.35, high: 21.6, close: 21.3, low: 18.13 },
            { open: 22.2, high: 22.7, close: 22.52, low: 21.87 },
            { open: 21.6, high: 22.05, close: 19.45, low: 19.3 }
        ];
        expect(EveningStar_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=EveningStarSpec.js.map