import React, { useState } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import { Itodo } from "./interface";
import TodoList from "./components/TodoList";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Itodo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, check: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
