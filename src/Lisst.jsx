import './lisst.module.css';
const Lisst =(props)=>{
    return(
      <div className='list'>
        <div style={{backgroundColor:props.list.isCompleted ?"rgb(123, 241, 139)" : "rgb(245, 84, 92)"}} key={`div_${props.index}`}>
          <h1  key={`h1_${props.index}`}>{props.list.listname}</h1>
          <button  key={`btn_${props.index}`} onClick={()=>props.deletelist(props.list.id)}>❌</button>
        <button onClick={()=>{props.completelist(props.list.id)}}>✔️</button>
        </div>
        </div>
    )
}
export default Lisst;