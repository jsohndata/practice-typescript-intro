interface TthreeSum {
  num1: number;
  num2: number;
  message?: string;
};

export const threeSum = (obj: TthreeSum) => {
  return console.log(`Sum = ${obj.num1 + obj.num2} ${obj.message}`);
};