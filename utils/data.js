let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    description: "Learn Node.js fundamentals",
    completed: false,
  },
  {
    id: 2,
    title: "Task Manager API",
    description: `
      create a RESTful API using Node.js, Express.js, and NPM packages. 
      The API will allow users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. 
      The tasks should have a title, description, and a flag for completion status. 
      The API should be tested using Postman or Curl.
      Set up a basic Node.js project with Express.js and other necessary NPM packages.`,
    completed: false,
  },
  {
    id: 3,
    title: "GET /tasks",
    description: "Retrieve all tasks",
    completed: false,
  },
  {
    id: 4,
    title: "GET /tasks/:id",
    description: "Retrieve a single task by its ID",
    completed: false,
  },
  {
    id: 5,
    title: "POST /tasks",
    description: "Create a new task",
    completed: false,
  },
  {
    id: 6,
    title: "PUT /tasks/:id",
    description: "Update an existing task by its ID",
    completed: false,
  },
  {
    id: 7,
    title: "DELETE /tasks/:id",
    description: "Delete a task by its ID",
    completed: false,
  },
];

module.exports = { tasks };
