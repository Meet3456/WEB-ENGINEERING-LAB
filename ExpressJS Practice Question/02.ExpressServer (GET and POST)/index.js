const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET request handler for route '/'
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Sample Form</title>
      </head>
      <body>
        <h1>Sample Form</h1>
        <form action="/" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// POST request handler for route '/'
app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`
    <html>
      <head>
        <title>Form Data</title>
      </head>
      <body>
        <h1>Form Data</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
