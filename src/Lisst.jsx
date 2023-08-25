import './lisst.module.css';
const Lisst =(props)=>{
    return(
        <div style={{backgroundColor:props.list.isCompleted ?"green" : "red"}}  key={`div_${props.index}`}>
          <h1  key={`h1_${props.index}`}>{props.list.listname}</h1>
          <button  key={`btn_${props.index}`} onClick={()=>props.deletelist(props.list.id)}>X</button>
        <button onClick={()=>{props.completelist(props.list.id)}}>Completed</button>
        </div>
    )
}
export default Lisst;