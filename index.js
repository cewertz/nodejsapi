const express = require('express');
const app = require('express')();
const PORT = 5050;

app.use(express.json())

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'red',
    size: 'large'
  })
});

app.post('/tshirt/:id', (req, res) => {

  const {id} = req.params;
  const {color} = req.body;

  if (!color) {
    res.status(418).send({message: 'We need a logo!'})
  }

  res.send({
    tshirt: ` with your ${color} and ID of ${id}`,
  });
});
