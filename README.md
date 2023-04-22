# Task Manager
Task manager is a RESTful API using Node.js, Express.js. The API will allow users to Create, Read, Update, and Delete tasks. The tasks have a title, description, and a flag for completion status. The API is testable using Postman or Curl.

## Start application
```
git clone https://github.com/anandureghu/task-manager-airtribe.git
cd task-manager-airtribe

npm install
npm run server

you should see server started running at http://localhost:3000
```

## Task model
```
{
  id: number,
  title*: "string",
  description*: "string",
  completed: boolean,
  createdAt: Date
}
```

## APIs available
```
Base Endpoint: http://localhost:3000/api/v1
```

```
GET /tasks 

  query params: {
    limit: number,
    offset: number,
    status: true | false | 1 | 0,
    sortBy: any field of task,
    sortOrder: asc | desc
  }

get all tasks available
```

```
GET /tasks/:taskId

get a task by given taskId  
```

```
POST /tasks 

  body: {
    title*: string,
    description*: string,
    completed: boolean
  }

add new task 
```

```
PUT /tasks/:taskId 

  body: {
    task: {
      title*: string,
      description*: string,
      completed: boolean
    }
  }

update a task by taskId
```

```
DELETE /tasks/:taskId

delete a task by given taskId  
```

## Response Model
```
{
  code: number,
  msg: string,
  data: [] | {}
}
```

## Error Response Model
```
{
  code: number,
  msg: string,
  errors: [] | {}
}
```
