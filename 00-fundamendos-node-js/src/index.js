const { response } = require("express");
const express = require("express");

const app = express();

// the express framework doesn't work only with json format, so you have to use the command line below to specify this use
app.use(express.json());

/**
 * GET 		-> search for information
 * POST 		-> insert an information
 * PUT 		-> edit an information
 * PATCH 	-> edit a specific information
 * DELETE 	-> remove an information
 */

/**
 * parameters types:
 *
 * Route Params 	-> identify a resource (edit/delete/search)
 * Query Params 	-> pagination/filters
 * Body Params 	-> objects insertion/modification
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const params = req.params;
  console.log(params);
  const { id } = req.params;
  console.log(id);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 5"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 6"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

//port 3333
app.listen(3333);
