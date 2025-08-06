
import "./App.css";
import { useState } from 'react';

export default function App() {
const [tasks,setTasks]=useState([
  {
    id:1,
    name:"heling someone in ned",
    completed:true},
  {
    id:2,
    name:"doing dsa",
    completed:true},
  {
    id:3,
    name:"doing react",
    completed:false}
]);


const [show,setShow]=useState(true);


function handleDelete(id) {
  setTasks(
    tasks.filter((task)=>task.id!==id)
  )
  }



  return (
    <div >
      <button onClick={()=>setShow(!show)}>toogle hide</button>
      <ul>{show && tasks.map(({id,name,completed})=>(
        <li key={id} className={completed?"a":"b"}>
          <p>{id}-{name}</p>
          <button onClick={()=>handleDelete(id)}>delete</button>
        </li>
      ))}
    
        


      </ul>




    </div>
  );
}

