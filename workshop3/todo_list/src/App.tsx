// import Header from './components/Header';
// import Footer from './components/Footer';
// import List from './components/List';
// import Todo from './types';

// import './App.css'
// import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Todo from './types';

import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://localhost:9000/todos');
      const data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;