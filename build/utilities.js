"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approximateEqual = (first, second) => {
    return exports.percentageOfNumber(Math.abs(first), Math.abs(second)) < 5;
};
exports.averageGain = (values, period, presiction = 64) => {
    const averages = [];
    for (let countPeriod = period; countPeriod < values.length; countPeriod++) {
        const sequence = values.slice(countPeriod - period, countPeriod);
        let gainSum = 0;
        for (let countSeq = 1; countSeq < sequence.length; countSeq++) {
            const gain = sequence[countSeq] - sequence[countSeq - 1];
            if (gain > 0) {
                gainSum += gain;
            }
        }
        averages.push(gainSum / period);
    }
    return averages.map(average => Number(average.toPrecision(presiction)));
};
exports.averageLoss = (values, period, presiction = 64) => {
    const averages = [];
    for (let countPeriod = period; countPeriod < values.length; countPeriod++) {
        const sequence = values.slice(countPeriod - period, countPeriod);
        let gainSum = 0;
        for (let countSeq = 1; countSeq < sequence.length; countSeq++) {
            const gain = sequence[countSeq - 1] - sequence[countSeq];
            if (gain > 0) {
                gainSum += gain;
            }
        }
        averages.push(gainSum / period);
    }
    return averages.map(average => Number(average.toPrecision(presiction)));
};
exports.percentageOfNumber = (first, second) => (Math.abs(first) / Math.abs(second)) * 100;
//# sourceMappingURL=utilities.js.map