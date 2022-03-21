const { body, validationResult } = require("express-validator");
let todos = [
  { item: "intial todo1", status: "complete" },
  { item: "intial todo2", status: "complete" },
];
function getTodos(req, res) {
  res.json(todos);
}

const createTodo = [
  body("item")
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("min should be 3 and max should be 100")
    .escape()
    .withMessage(
      "only alphabets and numbers are allowed special characters not allowed"
    ),
  body("status")
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage("in range of 8 to 10 characters"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { item, status } = req.body;
      todos.push({ item, status });
      res.json({ status: "adding todo completed" });
    }
  },
];

function deleteTodo(req, res) {
  console.log(req.params.indexToDelete);
  let newTodos = todos.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log("come in return false");
      return false;
    } else {
      return true;
    }
  });
  console.log(newTodos);
  todos = newTodos;
  console.log(todos);
  res.json({ status: "successfully deleted" });
}
module.exports = { getTodos, createTodo, deleteTodo };
