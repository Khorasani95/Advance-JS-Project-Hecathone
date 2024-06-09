// let num1 = document.getElementById("InputByUser").value;
// let num2 = document.getElementById("InputByUser").value;
// let num3 = document.getElementById("InputByUser").value;
let todos = [

  { title1: "Title 1", date1: new Date(), id: "unique id", iscompleted: false },
  { title: "Title 2", date: new Date(), id: "unique id", iscompleted: false },
  { title: "Title 3", date: new Date(), id: "unique id", iscompleted: false }
]

// Create Button
function creating() {
  let todo = { title: "Title 4", date: new Date(), id: "unique id", iscompleted: false }
  todos.push(todo);
  console.log(todos);
}
// Read Button
function read() {
  console.log("todos", todos);
}
// Update Button
function update() {
  const updatedTodo = true
  const changing = todos.map((todo, i) => {
    if (todo.title === "Title 2") {
      return { ...todo, iscompleted: updatedTodo }
    } else {
      return todo;
    }
  })
  todos = changing;
}
// Find Todo 
function findButton() {
  let findTodo = todos.find((todo, i) => {
    return todos.title1 === "Abd";
  });
  console.log(findTodo);
}

// let user = document.getElementById("output").value;
// let users = {
//         title :
//         date = value

// }
function filterButton() {
  // const updatedTodo = true
  const changing = todos.filter(todo => todo.title !== "Title 2");
  console.log(changing);
  }

// Find Button



// let users = [];

// function storingInArray() {
//   let firstName = document.getElementById("inputByUser").value;
//   let lastName = document.getElementById("inputByUserLastName").value;
//   let email = document.getElementById("inputByUserEmail").value;
//   let dob = document.getElementById("inputByUserDob").value;



//   let user = {
//     firstName,
//     lastName,
//     email,
//     dob,
//     id: Math.random().toString(36).slice(2) + new Date().getTime()
//   }
//   users.push(user);
//   console.log(users);
// }









