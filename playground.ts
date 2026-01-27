let userName = "max";

let tac: string = "Max";

let userID: string | number = "Brandon";
userID = 22;

let user: {
  name: string;
  age: number;
  isEmployed: boolean;
};

user = {
  name: "Kyle",
  age: 20,
  isEmployed: false,
};

let hobbies: [string, string, string];

hobbies = ["Sports", "Reading", "Writing"];

let pie: string[] = hobbies.filter((x) => x !== "Sports");
console.log(pie);

function add(x: number, y: number) {
  return x + y;
}

type Admin = {
  permissions: string;
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let banana: AppAdmin = {
  userName: "Taco",
  permissions: "None",
};

let paon: Admin = {
  permissions: "poop",
};

type Roles = {
  admin: string;
  user: string;
  editor: string;
};

function performAction(action: string | number, role: Roles) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return `${a}${b}`;
}

let roles: Array<Roles>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

function handleAdd(x: string) {
  console.log(x);
}

const textStorage: DataStorage<string> = {
  storage: ["salsa", "pudding"],
  add: handleAdd,
};

const userStorage: DataStorage<AppUser> = {
  storage: [],
  handleAdd(x) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const poop = merge({ a: "banana" }, { b: 24 });
