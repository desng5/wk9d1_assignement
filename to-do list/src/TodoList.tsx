import { TodoItem } from "./TodoItem"


export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0}
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.key} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}