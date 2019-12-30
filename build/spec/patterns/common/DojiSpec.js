"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Doji_1 = __importDefault(require("../../../patterns/common/Doji"));
describe("Doji (common)", () => {
    it("default", () => {
        const firstInput = [
            { open: 30.1, high: 32.1, close: 30.13, low: 28.1 }
        ];
        const secondInput = [
            { open: 30.1, high: 30.11, close: 30.1, low: 30.09 }
        ];
        expect(Doji_1.default(firstInput)).toBeTrue();
        expect(Doji_1.default(secondInput)).toBeTrue();
    });
});
//# sourceMappingURL=DojiSpec.js.map