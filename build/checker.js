"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./utilities");
exports.is = ({ open, close, high, low }, conditions) => {
    const min = Math.min(open, close);
    const max = Math.max(open, close);
    const fourth = (max + min) / 4;
    const size = utilities_1.percentageOf(open - close, high - low);
    if (conditions.bodySizeMinPercents && size < conditions.bodySizeMinPercents) {
        return false;
    }
    if (conditions.bodySizeMaxPercents && size > conditions.bodySizeMaxPercents) {
        return false;
    }
    switch (conditions.bodyPosition) {
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
    if (conditions.attached && high !== max && low !== min) {
        return false;
    }
    switch (conditions.trend) {
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