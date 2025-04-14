// ENUMS
// helps in defining set of named constants and improving readability and usability of your code.

enum = LoginError {
  Unauthorized = 'unauthorized',
    noUser = 'nouser',
    InternalError = 'internalError'
}


const printErrorMsg = (error:LoginError) =>{
  if(error == LoginError.Unauthorized){
    console.log("user not Unauthorized");
  }
  else if(LoginError.noUser){
     console.log("user not found");
  }
  else{
     console.log("Internal");
  }
}

printErrorMsg(LoginError.noUser);
// o/p : user not found
