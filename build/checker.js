"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
exports.is = (candle, { bodySizeMinPercents, bodySizeMaxPercents, bodyPosition, attached, trend, bodyInside, bodyOutside }) => {
    if (bodySizeMinPercents && exports.size(candle) < bodySizeMinPercents) {
        return false;
    }
    if (bodySizeMaxPercents && exports.size(candle) > bodySizeMaxPercents) {
        return false;
    }
    if (bodyPosition && !exports.isPosition(candle, bodyPosition)) {
        return false;
    }
    if (attached && !exports.isAttached(candle)) {
        return false;
    }
    if (trend && !exports.isTrend(candle, trend)) {
        return false;
    }
    if (bodyInside && !exports.isBodyInside(candle, bodyInside)) {
        return false;
    }
    if (bodyOutside && !exports.isBodyOutside(candle, bodyOutside)) {
        return false;
    }
    return true;
};
exports.size = ({ open, close, high, low }) => utilities_1.percentageOf(open - close, high - low);
exports.isBodyOutside = (first, second) => Math.min(first.open, first.close) < Math.min(second.open, second.close) &&
    Math.max(first.open, first.close) > Math.max(second.open, second.close);
exports.isBodyInside = (first, second) => Math.min(first.open, first.close) > Math.min(second.open, second.close) &&
    Math.max(first.open, first.close) < Math.max(second.open, second.close);
exports.isPosition = ({ open, close, high, low }, position) => {
    const min = Math.min(open, close);
    const max = Math.max(open, close);
    const fourth = (high + low) / 4;
    switch (position) {
        case "TOP": {
            const center = high - fourth;
            if (!(max >= center)) {
                return false;
            }
            break;
        }
        case "ABOVE_CENTER": {
            const center = high - fourth;
            if (!(max >= center && center >= min)) {
                return false;
            }
            break;
        }
        case "CENTER": {
            const center = (high + low) / 2;
            if (!(max >= center && center >= min)) {
                return false;
            }
            break;
        }
        case "BELOW_CENTER": {
            const center = low + fourth;
            if (!(max >= center && center >= min)) {
                return false;
            }
            break;
        }
        case "BOTTOM": {
            const center = low + fourth;
            if (!(center >= min)) {
                return false;
            }
            break;
        }
    }
    return true;
};
exports.isAttached = ({ open, close, high, low }) => {
    const min = Math.min(open, close);
    const max = Math.max(open, close);
    return high === max || low === min;
};
exports.isTrend = ({ open, close }, trend) => {
    switch (trend) {
        case "UP": {
            if (!(close > open)) {
                return false;
            }
            break;
        }
        case "NEUTRAL": {
            if (!(close === open)) {
                return false;
            }
            break;
        }
        case "DOWN": {
            if (!(close < open)) {
                return false;
            }
            break;
        }
    }
    return true;
};
//# sourceMappingURL=checker.js.map