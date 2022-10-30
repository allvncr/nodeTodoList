const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const {
  getTodos,
  getOneTodos,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/index");

router.use(bodyParser.json());

router.get("/", getTodos);

router.get("/:id", getOneTodos);

router.post("/", upload.array(), createTodos);

router.put("/:id", upload.array(), updateTodos);

router.delete("/:id", deleteTodos);

module.exports = router;
