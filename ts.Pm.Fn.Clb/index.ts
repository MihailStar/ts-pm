// ⋕js.ts.Pm.Fn.Clb.2
function make(arr: number[], func: (num: number) => number): number {
  return arr.reduce((acc, num) => acc + func(num), 0);
}

const res = make([1, 2, 3], (num) => num ** 2);

console.log(res);
