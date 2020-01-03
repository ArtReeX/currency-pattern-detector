export const approximateEqual = (first: number, second: number): boolean =>
  Math.abs(differenceInPercent(first, second)) <= 10;

export const averageGain = (
  values: number[],
  period: number,
  presiction: number = 64
): number[] => {
  const averages: number[] = [];

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

export const averageLoss = (
  values: number[],
  period: number,
  presiction: number = 64
): number[] => {
  const averages: number[] = [];

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

export const differenceInPercent = (first: number, second: number): number =>
  ((first - second) / Math.min(first, second)) * 100;
