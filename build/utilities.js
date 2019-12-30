"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approximateEqual = (first, second) => {
    let left = parseFloat(Math.abs(first - second).toPrecision(4)) * 1;
    let right = parseFloat((first * 0.001).toPrecision(4)) * 1;
    return left <= right;
};
exports.averageClose = (values, period) => {
    return [0];
};
exports.averageGain = (values, period) => {
    return [0];
};
//# sourceMappingURL=utilities.js.map