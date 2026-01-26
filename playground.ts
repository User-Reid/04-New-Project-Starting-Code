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
