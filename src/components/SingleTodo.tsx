import { Itodo } from "../interface";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDoneOutline } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";

interface props {
  todo: Itodo;
  todos: Itodo[];
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form className="todo-form" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo-span"
        />
      ) : todo.check ? (
        <s className="todo-span">{todo.todo}</s>
      ) : (
        <span className="todo-span">{todo.todo}</span>
      )}
      <div>
        <span
          className="icons"
          onClick={() => {
            if (!edit && !todo.check) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icons" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icons" onClick={() => handleCheck(todo.id)}>
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
