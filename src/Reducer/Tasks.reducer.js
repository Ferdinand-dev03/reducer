import React from 'react'

const  TasksReducer = (state, action) => {

  switch(action.type){
    case 'Add' : {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ],
        count: state.count + 1,
      }         
    }

    case 'delete' : {
     
       return {
       
        ...state,
        tasks: state.tasks.filter(task => !task.done ),
        checkCount: state.checkCount - state.checkCount,
        isLoading: state.isLoading = false,

      } 
      }
    case 'change' : {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === action.playload.id){
          return {
            ...state,
            text: action.playload.text}
        } else{
          return task
        }
      })}

    }
    case 'check': {
      
      return {
          ...state,
          tasks: state.tasks.map(check => check === action.payload ? {
            ...check,
            done: !check.done
            
          }: check ),
          isLoading: !state.done,
          checkCount: !state.done ? (state.checkCount + 1) : (state.checkCount - 1),
          
          
        }
       
      }

      case 'full':{
        return{
          ...state,
          tasks: state.tasks.map(full => full === action.payload ? {
            ...full,
            done: !full.done,
          } : full)
        
        }
      }
    
    default: {
      throw Error('action inconnue' + action.type)
    }
  }

 


//   si action.type est != alors on retourne une valeur null du state


}

export default TasksReducer

