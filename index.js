var inquirer = require("inquirer");

// need to add opening menu with these options here // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function initialOptions() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'chooseOptions',
          message: 'Select an option.',
          choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
          ],
        },
      ])}

// need to add switch statement here



// table prompts
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is your department id?",
      },
    ])

    // try async/await instead of this
    .then (answers => {
      console.log(answers);
      Connection.query(
        "INSERT INTO department",
        {
          name: answers.name,
        },
        function (error) {
          if (error) throw error;
          console.log("added department");
          querying();
        }
      );
    });
}

addDepartment();

function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "what is the title of your role?",
        },
        {
            type: "input",
            name: "salary",
            message: "what is your salary?",
        }
      ])
      .then (answers => {
        console.log(answers);
        Connection.query(
          "INSERT INTO role",
          {
            title: answers.title,
  salary: answers.salary,
          },
          function (error) {
            if (error) throw error;
            console.log("added role");
            querying();
          }
        );
      });
  }
  
  addRole();