const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status === 'completed') filter.completed = true;
    if (req.query.status === 'incomplete') filter.completed = false;

    const todos = await Todo.find({ user: req.user, ...filter }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { text, description } = req.body;
    const newTodo = new Todo({ text, description, user: req.user });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id, user: req.user });
    res.json({ msg: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
