
import './App.css';
import {useState} from "react";
import Lisst from './Lisst.js';
function App() {

  const [lists,setLists]=useState([]);
  const [newLists,setNewLists]=useState("");
  const handleChange=(event)=>{
    setNewLists(event.target.value)
  }
  const addlist=()=>{
    const list ={
      id:lists.length===0 ? 1 : lists[lists.length-1].id+1,
      listname:newLists
      
    }
    setLists([...lists,list])
  }
  const deletelist=(list)=>{
    setLists(lists.filter((event)=>{return list!==event.id}))
  }
  return (
    <div className="App">
      <div className="add-list">
        <input type="text" onChange={handleChange}></input>
        <button onClick={addlist}>Add to list</button>
      </div>
      {lists.map((list,index)=>{
        return (
          <Lisst  key={index} list={list} deletelist={deletelist}></Lisst>
          
        )
      })}
       <div className="llist"></div>
    </div>
  );
}
export default App;
