import React ,{useState } from 'react'
import './AllTodos.css'
const AllTodos = ({setTodos,todos,setEditTodo}) => {
  
  
 


  const completeTodo = (todo)=>{
    
    setTodos(
      todos.map((item)=>{
        if(item.id === todo.id){
         return {...item,completed:!item.completed}
          
         

        }
        // setComplete(true)
       return item;
       
        
        
      })
    )
    

  }
  const editTodo =(id)=>{
    const findTod=todos.find((todo)=>todo.id === id)
   
    setEditTodo(findTod)
   

  }

  const deleteTodo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  
   
    
    
   

 
  }
  

  // }
  
   
    return (
        <div  className="todos">
            
       
        {
         
          todos.map((value,index)=>{
            return(
              <div>

             
             
            
           
            <li className="list-item" key={value.id}>
             
              <input type="text" 
              value={value.title}
              className={value.completed ? 'complt-text':"list"}
              
              />
              <div>
                <button onClick={()=> completeTodo(value)} className="button-complete button">
                <i class="far fa-check-circle"></i>
                </button>
                <button className="button-edit button" onClick={()=> editTodo(value.id)}>
                <i class="fas fa-edit"></i>

                </button>
                <button onClick={()=> deleteTodo(value.id)} className="button-delete button">
                <i class="fas fa-trash-alt"></i>
                </button>
              </div>

            </li>
            </div>

            )
          
        

          })
          
      }
      
        
      </div>
    )
}

export default AllTodos
