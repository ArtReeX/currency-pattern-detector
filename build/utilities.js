"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approximateEqual = (first, second) => {
    let left = parseFloat(Math.abs(first - second).toPrecision(4)) * 1;
    let right = parseFloat((first * 0.001).toPrecision(4)) * 1;
    return left <= right;
};
//# sourceMappingURL=utilities.js.map