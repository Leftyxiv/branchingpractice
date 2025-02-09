const express = require('express');
const users = []

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send(users);
});

app.get('/:name', (req, res) => {
  const name = req.params.user;
  const user = users.find((user) => user === name);
  res.send(user);
});

app.post('/', (req, res) => {
  const newUser = req.body.user;
  users.push(newUser);
  res.send(users);
});

app.patch('/:name', (req, res) => {
  const name = req.params.name;
  const userIndex = users.findIndex((user) => user === name);
  users[userIndex] = updatedUser;
  res.send(users);
});

app.delete('/:name', (req, res) => {
  const name = req.params.name;
  const userIndex = users.findIndex((user) => user === name);
  users.splice(userIndex, 1);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});