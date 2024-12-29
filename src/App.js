import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox';
import TodoItem from './components/TodoItem';
function App() {

  let [ items, setItems ] = useState([])

  function addItem(item) {
    let newItems = [ ...items, item ]
    setItems(newItems)
    console.log(items)
  }

  function deleteItem(item) {
    deleteItem()
    items.splice(item, 1)
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <InputBox onEnter={addItem} />
      
      {
        (function() {
          let todoContainers = []
          let n=0
          for (let i of items) {
            todoContainers.push(<TodoItem index={n} item={i} onDelete={deleteItem}/>)
            n++
          }
          return todoContainers
        })()
      }

    </div>
  );
}

export default App;
