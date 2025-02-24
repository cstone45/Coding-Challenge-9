//Task 1: Creating an Employee Class
class Employee { //Establishes Employee as a Class
    constructor(name, id, department, salary) { //Constructs the Properties of the Employee Class
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails() { //Establishes the template literal which determines how the employee information will be presented
        console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`);
    }
    calculateAnnualSalary() { //Calculates the Annual Salary of an Employee in this company and establishes the Formulas neecessary to calculate the salary
        let annualSalary = this.salary * 12
        if (Manager = true, annualSalary = (this.Salary * 12) * 0.10)
        return annualSalary
    }
};
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //Establishes Alice Johnson as an Employee
console.log(emp1.getDetails()); //Logs Alice Johnsons Employee Details to the console
console.log(emp1.calculateAnnualSalary()); //Calculates Alice Johnsons Annual Salary

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee { //Creates the Manager Class
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); //Brings over the Data from the Employee Class and applies it to the new manager class
        this.teamSize = teamSize; //Establishes Team Size as a property
    }
    getDetails() { //Establishes the Get Details function
        console.log(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`); //Creates the template literal which will determine how Johns Data is displayed in the console
    }
    calculateBonus() { //Calculates the Bonus and applies it to Johns Salary as a Manager
        return (this.salary * 12) * 0.10
    }
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //Creates the Data for John Smith
console.log(mgr1.getDetails()); //Generates the Details for John Smith
console.log(mgr1.calculateBonus()); //Calculates Johns Bonus

//Task 3: Creating a Company Class
class Company { //Establishes Company as a class
    constructor(name) { //Constructs the propertues
        this.name = name; //Establishes the Name of the company as a property of the class
        this.employees = []; //Establishes Employee Array
    }
    addEmployee(employee) { //Adds a new Employee to the Array
        this.employees.push(employee);
    }
    listEmployees() { //Creates the List Employee Method and contains the function to produce this result
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
    calculateTotalPayroll() { //Creates the Calculate Total Payroll function and contains the formula with a return command which will produce the Total
        this.salary.forEach(emp => console.log(emp.salary + emp.salary));
    }
    promoteToManager(employee, teamSize) { //Creates the Promote To Manager Method and contains the return command
        return (employee, teamSize); 
    }
};
const company = new Company("TechCorp");
company.addEmployee(emp1); //Adds Alice Johnson as an Employee
company.addEmployee(mgr1); //Adds John Smith as a Manager
company.listEmployees(); //Creates The List of Employees containing their attributes

//Task 4: Implementing a Payroll System (See changes above)
console.log(company.calculateTotalPayroll());// Calculates the  Total Payroll

//Task 5: Implementing Promotions (See changes above)
company.promoteToManager(emp1, 3); //Promotes Alice to Manager and assignes her Team Size
company.listEmployees(); //Creates the Output containing Alice as a Manager