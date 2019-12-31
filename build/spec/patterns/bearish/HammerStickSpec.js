"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const HammerStick_1 = __importDefault(require("../../../patterns/bearish/HammerStick"));
describe("HammerStick (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 30.1, high: 30.1, close: 26.13, low: 10.06 }
        ];
        expect(HammerStick_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=HammerStickSpec.js.map