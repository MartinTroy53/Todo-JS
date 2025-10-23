const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const ol = document.getElementById("ol");
const todoButton = document.getElementById("todo-button");
const todosButton = document.getElementById("todos-button");

async function getTodo(todoID) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoID}`
  );

  const data = await response.json();

  return data;
}

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();

  return data;
}

todoButton.addEventListener("click", async function () {
  const todoID = input.value;
  const todo = await getTodo(todoID);

  const { userId, id: TodoId, title, completed } = todo;

  paragraph.innerText = `userId: ${userId} | TodoId: ${TodoId} | title: ${title} |  completed: ${completed} ${completed ? "✅" : "❌"}`;
});

todosButton.addEventListener("click", async function () {
  const todos = await getTodos();

	ol.innerHTML = todos.map((todo, index, todos) => {
	  const { userId, id: TodoId, title, completed } = todo;
    return `<li>userId: ${userId} | TodoId: ${TodoId} | title: ${title} |  completed: ${completed}</li> ${completed ? "✅" : "❌"}`;
  });
});
