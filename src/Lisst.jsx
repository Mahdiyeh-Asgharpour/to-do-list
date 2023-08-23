
const Lisst =(props)=>{
    return(
        <div key={`div_${props.index}`}>
          <h1  key={`h1_${props.index}`}>{props.list.listname}</h1>
          <button  key={`btn_${props.index}`} onClick={()=>props.deletelist(props.list.id)}>x</button>
        </div>
    )
}
export default Lisst