import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import  "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  
  const[todoItems,setTodoItems] = useState([])

  const handleNewItem = (itemName,itemDueDate)=>{
    const newTodoItems = [...todoItems,{name : itemName, dueDate : itemDueDate}]
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem=(todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems)
    console.log(`Item Deleted ${todoItemName}`); 
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length===0 && <WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
      <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}
export default App;

