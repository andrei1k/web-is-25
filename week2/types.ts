// Omit
type Person1 = { name: string; age: number; address: string };
type WithoutAddress = Omit<Person1, "address">;



// Result: { name: string; age: number }
const user1: WithoutAddress = { name: "Alice", age: 30 };



// Pick
type Person2 = { name: string; age: number; address: string };
type NameOnly = Pick<Person2, "name">;

// Result: { name: string }
const person2: NameOnly = { name: "John" };





// Partial
type Person3 = { name: string; age: number };
type PartialPerson = Partial<Person3>;

// Result: { name?: string; age?: number }
const user3: PartialPerson = { age: 25 }; // OK





// Required 
type Person4 = { name?: string; age?: number };
type RequiredPerson = Required<Person4>;

// Result: { name: string; age: number }
const user4: RequiredPerson = { name: "Bob", age: 30 }; // Must provide both





// Readonly 
type Person5 = { name: string; age: number };
const person5: Readonly<Person5> = { name: "Alice", age: 25 };

// person5.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.





// union
type A = { name: string};
type B = { age: number};
type AorB = A | B;

const user: AorB = { name: "Alice" };




// Exclude
type Status = "success" | "error" | "pending";
type WithoutError = Exclude<Status, "error">;

// Result: "success" | "pending"
const status1: WithoutError = "success";



// Extract
type Status2 = "success" | "error" | "pending";
type OnlyError = Extract<Status, "error" | "pending">;

// Result: "error" | "pending"
const status2: OnlyError = "error";