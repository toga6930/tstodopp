import React, { useRef } from "react";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, addTodo }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="input-form"
        onSubmit={(e) => {
          addTodo(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          value={todo}
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          className="input"
        />
        <button type="submit" className="add">
          Add
        </button>
      </form>
    </div>
  );
};
export default InputField;
