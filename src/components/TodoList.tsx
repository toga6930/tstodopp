import { Itodo } from "../interface";
import SingleTodo from "./SingleTodo";

interface props {
  todos: Itodo[];
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
}

const TodoList = ({ todos, setTodos }: props) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
