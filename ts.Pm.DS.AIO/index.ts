// ⋕js.ts.Pm.DS.CO.1
interface MyEvent {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}

const myEvent: MyEvent = {
  name: 'my new event',
  time: {
    start: '2025-11-01',
    finish: '2025-12-31',
  },
};

// ⋕js.ts.Pm.DS.CO.2
interface Employee {
  name: string;
  position: {
    name: string;
    salary: number;
  };
  addr: {
    country: string;
    city: string;
  };
}

const employee: Employee = {
  name: 'Andrew',
  position: {
    name: 'programmer',
    salary: 1000,
  },
  addr: {
    country: 'Belarus',
    city: 'Minsk',
  },
};
