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
            { open: 20.7, high: 21.0, close: 20.3, low: 20.0 }
        ];
        expect(SpinningTop_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=SpinningTopSpec.js.map