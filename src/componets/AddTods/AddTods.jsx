import React,{useEffect, useState} from 'react'
import './addTods.css'
const AddTods = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const [err, setErr] = useState(false)
   
  
  const updateTodo =(title,id,complted)=>{
      const newTodo =todos.map((value)=>value.id === id ?{title,id,complted} : value )
     
      setTodos(newTodo)
      setEditTodo('')
      
     
  };
  useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title)
    }else{
        setInput('')
    }
        
},[setInput,editTodo])
  
  const addTodo = (e)=>{
    e.preventDefault();
   if(input==="" || null){
       setErr(true)
   }else if(!editTodo){
    setTodos([...todos,{id:Date.now(),title:input,completed:false}])
    setErr(false)
    setInput('')

}
    
    
    else{
        setErr(false)
        updateTodo(input,editTodo.id,editTodo.completed)

    }
  }
  
    return (
        
        <div>
            
             <input 
             type="text" 
            className='input-task' 
            placeholder="🖊️ Add item..."
            value={input}
           
            onChange={(e)=>setInput(e.target.value)}
            
            />
            <button className="add"  onClick={addTodo  }>
                {editTodo ? 'Ok':'Add'}
            </button>
            {err ? <p style={{color:'white'}}><i>ooops!!!!! Please Enter The Tods...</i></p> : ''}
           
        </div>
       
           
        
    )
}

export default AddTods
