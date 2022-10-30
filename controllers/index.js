let { todos, validationData } = require("../data/index");

const getTodos = (req, res) => {
  let list = [];
  if (req.query.done) {
    todos.forEach((todo) => {
      if (todo.done == req.query.done) list.push(todo);
    });

    res.json(list);
    return;
  } else res.json(todos);
};

const getOneTodos = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).json("The todo with the given ID was not found !");

  res.json(todo);
};

const createTodos = (req, res) => {
  const { error } = validationData(req.body);
  if (error) {
    let erros = [];
    error.details.forEach((err) => {
      erros.push(err.message);
    });
    return res.status(400).json(erros);
  }

  const todo = {
    id: todos.length + 1,
    lib: req.body.lib,
    done: req.body.done ? "true" : "false",
  };
  todos.push(todo);
  res.json(todo);
};

const updateTodos = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).json("The todo with the given ID was not found !");

  const { error } = validationData(req.body);
  if (error) {
    let erros = [];
    error.details.forEach((err) => {
      erros.push(err.message);
    });
    return res.status(400).json(erros);
  }

  todo.lib = req.body.lib;
  todo.done = req.body.done;

  res.json(todo);
};

const deleteTodos = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).json("The todo with the given ID was not found !");

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.json(todo);
};

module.exports = {
  getTodos,
  getOneTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};
