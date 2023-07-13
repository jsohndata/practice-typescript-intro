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

let manager1: IEmployee = {
  fName: "Agent",
  lName: "Smith",
  age: 30,
  cool: false,
  app: {
    appName: "Sentinel",
    production: true,
  }
};

