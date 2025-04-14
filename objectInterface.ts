interface UserInterface{
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface{
  id: 1,
  name: "Hello",
  greet(message){
    console.log(message);
  }
}

User.greet("Helloz")

//age will be undefined
