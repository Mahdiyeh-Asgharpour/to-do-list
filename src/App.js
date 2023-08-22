
import './App.css';
import {useState} from "react";
function App() {
  const [lists,setLists]=useState([]);
  const [newLists,setNewLists]=useState("");
  const handleChange=(event)=>{
    setNewLists(event.target.value)
  }
  const addlist=()=>{
    setLists([...lists,newLists])
  }
  const deletelist=(list)=>{
    setLists(lists.filter((event)=>{return list!==event}))
  }
  return (
    <div className="App">
      <div className="add-list">
        <input type="text" onChange={handleChange}></input>
        <button onClick={addlist}>Add to list</button>
      </div>
      {lists.map((list)=>{
        return (
        <div>
          <h1>{list}</h1>
          <button onClick={()=>deletelist(list)}>x</button>
        </div>
        )
      })}
       <div className="llist"></div>
    </div>
  );
}

export default App;
