interface IEmployee {
  fName: string;
  lName: string;
  age: number;
  cool?: boolean;
  app: {
    appName: string,
    production: boolean,
  };
};

/* 
  IManager brings in everything from IEmployee
  and extends it with the following.
 */
interface IManager extends IEmployee {
  salary: number;
};



/* ********************************** */
let student1: IEmployee = {
  fName: "Thomas",
  lName: "Anderson",
  age: 23,
  cool: true,
  app: {
    appName: "Matrix",
    production: true,
  }
};

let manager1: IManager = {
  fName: "Agent",
  lName: "Smith",
  age: 30,
  cool: false,
  app: {
    appName: "Sentinel",
    production: true,
  },
  salary: 1000000
};
