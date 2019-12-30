"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const SpinningTop_1 = __importDefault(require("../../../patterns/bearish/SpinningTop"));
describe("SpinningTop (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 20.62, high: 20.75, close: 20.5, low: 20.34 }
        ];
        expect(SpinningTop_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=SpinningTopSpec.js.map