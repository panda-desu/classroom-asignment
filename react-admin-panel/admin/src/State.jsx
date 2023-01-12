import { useState } from "react";
import second from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    maxWidth: "580px",
    display: "flex",
    margin: `0 auto`,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    width: `100%`,
    height: 45,
    paddingLeft: 30,
    borderRadius: 50,
    boxShadow: `0 1px 6px 0 rgb(0 0 0 / 38%) `,
    border: 0,
  },
  plusIcon: {
    color: `darkcyan`,
    fontSize: `20`,
  },
  form: {
    width: "100%",
    position: `relative`,
    marginBottom: 40,
  },
  button: {
    lineHeight: `20px`,
    padding: `12.5px 20px`,
    margin: 0,
    background: `transparent`,
    boxShadow: `none`,
    border: 0,
    position: "absolute",
    top: 0,
    right: 0,
  },
  ul: {
    listStyleType: `none`,
    padding: 0,
    margin: 0,
    width: `100%`,
  },
  li: {
    borderBottom: `1px solid #eaeaea`,
    padding: `17px 0`,
    display: `flex`,
    justifyContent: `space-between`,
    fontSize: `1.2rem`,
  },
  check: {
    marginRight: 15,
  },
};
const PlusIcon = () => {
  return (
    <svg
      style={styles.plusIcon}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
    </svg>
  );
};

export const State = () => {
  const [todos, setTodo] = useState([
    { value: `Egg`, checked: false, editing: false },
    { value: `Bread`, checked: false, editing: false },
    { value: `Ham`, checked: false, editing: true },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const newList = [
      ...todos,
      { value: input, checked: false, editing: false },
    ];
    setTodo(newList);
  };
  const RemoveList = (index) => {
    setTodo(todos.filter((k, i) => i !== index));
  };
  const handleCheck = (index) => {
    const newList = todos.map((todo, i) => {
      if (i === index) {
        const newTodo = { ...todo };
        newTodo.checked = !newTodo.checked;
        return newTodo;
      }
      return todo;
    });
    setTodo(newList);
  };
  const editList = (index) => {
    const EditList = todos.map((todo, i) => {});
  };
  return (
    <>
      <div style={styles.wrapper}>
        <h1>Todo</h1>
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"Add todo.."}
          />
          <button style={styles.button} type="submit">
            <PlusIcon />
          </button>
        </form>
        <ul style={styles.ul}>
          {todos.map((todo, index) => (
            <li
              style={styles.li}
              onChange={editList(index)}
              key={`list-item-${index}`}
            >
              {todo.editing ? (
                <>
                  <input type="text" value={todo.value} />
                </>
              ) : (
                <>
                  <div>
                    <input
                      type="checkbox"
                      style={styles.check}
                      checked={todo.checked}
                      onChange={() => {
                        handleCheck(index);
                      }}
                    />
                    <span
                      onClick={() => {
                        editList(index);
                      }}
                      style={{
                        textDecoration: todo.checked ? "line-through" : "",
                      }}
                    >
                      {todo.value}
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      RemoveList(index);
                    }}
                  >
                    🗑️
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
