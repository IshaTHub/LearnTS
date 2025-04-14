// GENERICS
// Generics are meant to basically reusing some sort of class or object that can have multiple type of datatype as arguments to the data that
// is present in that class and making different versions of it.

class StorageContainer<T>{
  private content: T[];

  constructor(){
   this.content = [];
  }


  addItem(item: T): void {
    this.content.push(item);
  }

  getItem(idx:number): T | undefined {
    return this.content[idx];
  } 
}

const userName = new StorageContainer<string>();
userName.addItem("abc");
console.log(userName.getItem(0));

//o/p: abc

const userAge = new StorageContainer<number>();
userAge.addItem(23);
console.log(userAge.getItem(0));

//o/p: 23
