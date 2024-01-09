// write express boilerplate code
//with express.json() middleware

const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

app.post('todo', (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong Inputs',
    });
    return;
  }
  //put it in mongoDB
  res.json;
});

app.get('todos', (req, res) => {});

app.put('completed', (req, res) => {
  s;
  const updatePayload = req.body;
  const parsePayLoad = createTodo.safeParse(updatePayload);

  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: 'you sent the wrong input',
    });
    return;
  }
  res.json({
    msg: 'You have updated the Todo',
  });
});
