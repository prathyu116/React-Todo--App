import { useState } from 'react';
import './App.css';
import AddTods from './componets/AddTods/AddTods';
import AllTodos from './componets/AllTodos/AllTodos';
import Header from './componets/Header/Header';
// import ResolveTods from './componets/ResolveTods/ResolveTods';

function App() {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo,setEditTodo]=useState(null)
  return (
    <div className="container">
      
      <div className="App-wrapper">
        <div>
          <Header />
          
        </div>
        <div>
          <AddTods setTodos={setTodos} input={input} setInput={setInput} todos={todos} editTodo={editTodo} setEditTodo={setEditTodo}/>
          
        </div>
        <div>
          {/* <ResolveTods  /> */}
        </div>
        <div>
          <AllTodos  setTodos={setTodos} todos={todos} setEditTodo={setEditTodo}/>
          
        </div>
       
        
        

      </div>
      
    </div>
  );
}

export default App;
