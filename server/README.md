# Todo API

## End Points

- Create todo => POST /todos
- Get single todo => Get /todos/1
- Update todo => PUT /todos/1
- Delete todo => DELETE /todos/1
- Get all todos => GET /todos
- Limit get todos => GET /todos?limit=2
- Limit and skip todos => GET /todos?limit=2&offset=2

## Setup

> Clone the project from github:

```
$ git clone git@github.com:rOluochKe/pern-todo.git
```

> Cd into the project directory:

```
$ cd pern-todo/server
```

> Install required packages:

```
$ npm install
```

> Configure your database:

```
$ Follow '.env.example' for variables
```

> Run project and test the apis:

```
$ npm run dev
```

## Follow examples

- [rest.http](./rest.http)
