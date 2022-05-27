var inquirer = require("inquirer");

function querying() {
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) throw error;
    console.log("results", results);
    connection.end();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is your department id?",
      },
    ])
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
  },
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