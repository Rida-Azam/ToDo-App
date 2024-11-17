import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Form from "./Component/Form";
import "./App.css"
import TodosList from "./Component/TodosList";

export default function App() {


// const initialState = `JSON.parse(localStorage.getItem("todos")) || []`;
const [input,setInput] = useState("");
const [todos,setTodos] = useState([]);
const [editTodo,setEditTodo] = useState(null);

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


    return (
        <>

            <div className="container">

                <div className="app-wrapper">
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Form 
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos} 
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                        />
                    </div>
<div>
    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
</div>

                </div>

            </div>




        </>
    )
}














// import React, { useState } from 'react';
// import {AiOutlineDelete , AiOutlineEdit }from 'react-icons/ai'
// import './App.css';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editingId, setEditingId] = useState(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([
//         ...todos,
//         {
//           id: new Date().getTime(),
//           text: inputValue,
//         },
//       ]);
//       setInputValue('');
//     }
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const editTodo = (id, newText) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//     setEditingId(null);
//   };

//   return (
//     <div className="app">
//       <h1>ToDo App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul className="todo-list">
//         {todos.map((todo) => (
//           <li key={todo.id} className="todo-item">
//             {editingId === todo.id ? (
//               <input
//                 type="text"
//                 value={todo.text}
//                 onChange={(e) => editTodo(todo.id, e.target.value)}
//                 onBlur={() => setEditingId(null)}
//                 autoFocus
//               />
//             ) : (
//               <>
//                 <span>{todo.text}</span>
//                 <div className="actions">
//                   <button onClick={() => setEditingId(todo.id)}><AiOutlineEdit/></button>
//                   <button onClick={() => deleteTodo(todo.id)}><AiOutlineDelete/></button>
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
