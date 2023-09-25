
import './App.css';
import {useState} from "react";
import Lisst from './Lisst.jsx';


function App() {

  const [lists,setLists]=useState([]);
  const [newLists,setNewLists]=useState("");
  const [result,setResult]=useState("");
  const handleChange=(event)=>{
    setNewLists(event.target.value);
    
  }
  const addlist=()=>{
    const list ={
      id:lists.length===0 ? 1 : lists[lists.length-1].id+1,
      listname:newLists,
      isCompleted:false
      
    }
    setLists([...lists,list])
  }
  const deletelist=(list)=>{
    setLists(lists.filter((event)=>{return list!==event.id}))
  }
  const completelist=(listid)=>{
    const newwlist=lists.map((list)=>{
      if(list.id===listid) return {...list,isCompleted:!list.isCompleted}
      else return list
    })
    setLists(newwlist)
  }
  return (
    < >
      <div className="add-list" >
        <input type="text" onChange={handleChange}></input>
        <button onClick={addlist} className="addbtn">Add to list</button>
       
      </div>
      <div className="llist">
        {lists.map((list,index)=>{
          return (
            <Lisst  key={index} list={list} deletelist={deletelist} completelist={completelist}></Lisst>
          
        )
      })}
      </div>
    </>
  );
}
export default App;
