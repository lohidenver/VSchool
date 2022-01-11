console.log("Employee Records has started");

let employees = [];

function Employee (name, jobTitle, salary, status="Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () { 
        return 
        "Name: "+ this.name + 
        " Job Title: "+ this.jobTitle + 
        " Salary: "+ this.salary +
        " Status: "+ this.status
    }
}

let bob = new Employee("Bob", "Builder", 40000, "Contract");
let dave = new Employee("Dave", "Programmer", 80000);
let eva = new Employee("Eva", "Nutritionist", 60000)
let nick = new Employee("Nick", "Bartender", 50000)

employees.push(bob, dave, eva, nick);

console.log(employees)
console.log("Employee Records has finished");