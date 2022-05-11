// ⋕js.ts.Pm.DS.In.1
interface Employee {
  name: string;
  age: number;
  salaryday: number;
}

const john: Employee = {
  name: 'john',
  age: 29,
  salaryday: 14,
};

const john2: Employee = {
  name: 'john2',
  age: 30,
  salaryday: 15,
};

const john3: Employee = {
  name: 'john3',
  age: 31,
  salaryday: 16,
};

// ⋕js.ts.Pm.DS.In.2
interface Time {
  hour: number;
  minute: number;
  second: number;
}

const beginOfDay: Time = {
  hour: 0,
  minute: 0,
  second: 0,
};

const middleOfDay: Time = {
  hour: 11,
  minute: 59,
  second: 59,
};

const endOfDay: Time = {
  hour: 23,
  minute: 59,
  second: 59,
};
