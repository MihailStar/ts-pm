// ⋕js.ts.Pm.Bs.Fn.1
function sum(x: number, y: number): number;
function sum(x: number, y: string): string;
function sum(x: string, y: number): string;
function sum(x: string, y: string): string;

function sum(x: any, y: any): any {
  return x + y;
}

// ⋕js.ts.Pm.Bs.Fn.2
function sum2(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}

// ⋕js.ts.Pm.Bs.Fn.3
function func(elem: HTMLElement, text: string): void {
  elem.textContent = text;
}
