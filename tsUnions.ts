//UNION 
//combining multiple types that combination of them can be attributed to the variable
// accepts both set of data

const printID = (ID: string | number | boolean | number[]) => {
  console.log("ID:" + ID);
}

printID(234543333);


//OR

// using TYPE ALIAS

type IDFieldType = number | string;

const showID = (ID: IDFieldType) => {
  console.log("ID:" + ID);
}

showID(234543333);
