
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

const todos = [
	{ id: 1, item: 'Learn JavaScript', complete: false },
	{ id: 2, item: 'Learn Express', complete: false },
	{ id: 3, item: 'Build a To Do App', complete: false }
]

app.get('/', (_, response) => {
	response.sendFile('index.html', { root })
})



// GET /api/todos
app.get('/api/todos', function(_, response) {
    response.json(todos);
});

/*arrow function method:
app.get('/api/todos', (_, response) => {
    response.json(todos);
});*/

// POST /api/todos
app.post('/api/todos', function(request, response) {
    const { item } = request.body;
    const id = todos.length + 1;
    const complete = false;
    todos.push({ id, item, complete });
    response.json({ id });
});

/*arrow function method:
app.post('/api/todos', (request, response) => {
    const { item } = request.body;
    const id = todos.length + 1;
    const complete = false;
    todos.push({ id, item, complete });
    response.json({ id });
});*/

// PUT /api/todos/:id
app.put('/api/todos/:id', function(request, response) {
    const { id } = request.params;
    const task = todos.find(function(todo) { return todo.id.toString() === id; });
    if (task) {
        task.complete = !task.complete; // toggle the complete property
        response.json(task);
    } else {
        response.status(404).json({ error: 'Task not found' });
    }
});

/*arrow function method: 
app.put('/api/todos/:id', (request, response) => {
    const { id } = request.params;
    const task = todos.find(todo => todo.id.toString() === id);
    if (task) {
        task.complete = !task.complete; // toggle the complete property
        response.json(task);
    } else {
        response.status(404).json({ error: 'Task not found' });
    }
});*/


const message = `Server running: http://localhost:${port}`
app.listen(port, function() {
    console.log(message);
});

/*arrow function method:
app.listen(port, () => console.log(message))*/