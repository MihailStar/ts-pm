// ⋕js.ts.Pm.DS.OIO.1
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

const employee: Employee = {
  name: 'Andrew',
  potision: {
    name: 'programmer',
    salary: 1000,
  },
  addr: {
    country: 'Belarus',
    city: 'Minsk',
  },
};

// ⋕js.ts.Pm.DS.OIO.2
interface Parent {
  name: string;
  age: number;
  parents: Parents | null;
}

interface Parents {
  mother: Parent;
  father: Parent;
}

interface User {
  name: string;
  age: number;
  parents: Parents;
}

const user: User = {
  name: 'John',
  age: 30,
  parents: {
    mother: {
      name: 'Jane',
      age: 50,
      parents: null,
    },
    father: {
      name: 'Eric',
      age: 50,
      parents: null,
    },
  },
};
