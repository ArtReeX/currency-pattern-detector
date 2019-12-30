export const approximateEqual = (first: number, second: number): boolean => {
  let left = parseFloat(Math.abs(first - second).toPrecision(4)) * 1;
  let right = parseFloat((first * 0.001).toPrecision(4)) * 1;

  return left <= right;
};

export const averageClose = (values: number[], period: number): number[] => {
  return [0];
};

export const averageGain = (values: number[], period: number): number[] => {
  return [0];
};
