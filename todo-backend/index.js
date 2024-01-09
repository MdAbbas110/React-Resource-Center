// write express boilerplate code
//with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('todo', async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong Inputs',
    });
    return;
  }
  //put it in mongoDB
  // awaiting on to actually get created in db then showing user that todo is created
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: 'Todo created',
  });
});

app.get('todos', async (req, res) => {
  //using async because hitting a db is async process and it can take time to we need to await on that request
  const todos = await todo.find();
  res.json({
    todo: todos,
  });
});

app.put('completed', async (req, res) => {
  s;
  const updatePayload = req.body;
  const parsePayLoad = updateTodo.safeParse(updatePayload);

  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: 'you sent the wrong input',
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: 'Todo marked as completed',
  });
});

app.listen(3000);
