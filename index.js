var inquirer = require("inquirer");

// connect.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

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