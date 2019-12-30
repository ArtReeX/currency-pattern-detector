"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Engulfing_1 = __importDefault(require("../../../patterns/bearish/Engulfing"));
describe("Engulfing (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 21.44, high: 25.1, close: 23.25, low: 20.82 },
            { open: 27.89, high: 30.87, close: 15.36, low: 14.93 }
        ];
        expect(Engulfing_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=EngulfingSpec.js.map