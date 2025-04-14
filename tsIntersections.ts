//INTERSECTION  ( & )
// We want both fields of both objects

interface IBusiness{
  name: string;
  creditScore: number;
}

interface UserIdentity{
  id: number;
  email: string;
}

type Employee = IBusiness & UserIdentity

const signContract = (employee: Employee) : void => {
  console.log("Contract signed by: " + employee.name + "with email: " + employee.email);
}

signContract(name: "Hello", creditScore: 3, id: 34, email: "abc@gmail.com")
