import React, { useEffect, useReducer, useState } from 'react'
import TasksReducer from './Tasks.reducer'



const tasks = [ 
    {id: 0, text: 'Visit Kafka Museum', done: false},
    {id: 1, text: 'Watch a puppet ', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
]

let nextId = 3

const Reducer = () => {
    
    const [state, dispatch] = useReducer(TasksReducer, {
        tasks: tasks,
        count: tasks.length,
        checkCount: 0,
        isLoading: false,  
        fullCheck: false             
    })


    console.log(state.fullCheck)
        
    const handleAdd = (text)=> {
        dispatch(
            {
                type: 'Add',
                id: nextId++,
                text,      
            },
           
           
       )     
    }
    const handleCheckBox = ()=> {
        dispatch({
            type: 'delete',
           
        },
    
    ) 
        
    }

  return (
    <div className='tasks'>
        <h2> {state.count} Tasks</h2>
        {state.isLoading ? <div className='delet checkbox-wrapper-19 '>{state.checkCount} 
            <input type='checkbox' onChange={()=> {dispatch({type: 'full', payload: state.tasks,  })}}
            checked={tasks.done}
            />
            <button onClick={()=> handleCheckBox()}>supprimer</button> </div>: ''}
        <div className='inputs'>
            <AddtTasks onAdd={handleAdd} />
        </div>
      <ul className='formTasks'>
       {
            state.tasks.map( tasks => ( 
                <li key={tasks.id}>
                    <input type='checkbox'
                       onChange={ ()=>{ dispatch({type: 'check', payload: tasks, })}}
                        checked={tasks.done}
                    />
                    
{/*                   
                    <input type='text' 
                        value={inputText}
                        onChange={(e)=>setInputText(e.target.value)}
                        onblur={()=> { handleBlur(tasks.id                                   )}}
                     /> */}              
                    
                        {tasks.text}
                                     
                        {/* <button onClick={()=>  {setTextId(tasks.id); setInputText(tasks.text)}}>
                            Modifier
                        </button> */}                   
                </li>
            ))
       }
      </ul>
    </div>
  )
}



const AddtTasks = ({onAdd})=> {

    const [input, setInput] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault()
        onAdd(input)
        setInput('')
    }

    return(
        <form className='input' onSubmit={onSubmit}>
            <p>taches</p>
            <input type='text'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
           
            <button className='bord-1' >
                Ajouter
            </button>
        </form>
    )
}



export default Reducer



// const a = [1, 2, 3, 4]
    // const result = a.reduce((count, value)=> {
    //     console.log('cont>>', count);
    //     console.log('value>>', value)

    //     return count + value
    // })
    // console.log(result)






