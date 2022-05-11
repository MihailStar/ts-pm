// ⋕js.ts.Pm.DS.AOO.1
const regularExpressions: RegExp[] = [
  /some regular expression/,
  /some regular expression/,
];

// ⋕js.ts.Pm.DS.AOO.2
const promises: Promise<string>[] = [
  Promise.resolve('some string'),
  Promise.resolve('some string'),
];

// ⋕js.ts.Pm.DS.AOO.3
interface Position {
  name: string;
  salary: number;
}

interface Address {
  country: string;
  city: string;
}

interface Employee {
  name: string;
  potision: Position;
  addr: Address;
}

const employees: Employee[] = [
  {
    name: 'Andrew',
    potision: {
      name: 'programmer',
      salary: 1000,
    },
    addr: {
      country: 'Belarus',
      city: 'Minsk',
    },
  },
];
