import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar";
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./App.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })

  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = completed
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return (
    <>
      <NavBar />
      <div className="app-container">
        <h1 className="header">Todo List</h1>
        <NewTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}