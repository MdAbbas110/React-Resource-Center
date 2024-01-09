import { useState } from 'react'
import './App.css'



function App() {

  const [todo, setTodos] = useState([{
    title: 'Go to Gym',
    description: 'will go by 5',
    completed: true
  },
  {
    title: 'Go to Gym',
    description: 'will go by 5',
    completed: true
  }
])

function addTodo () {
  setTodos([...todo, {
    title: 'new todo',
    description: 'button added'
  }])
}
  

  return (
    <div>
      <button onClick={addTodo} >Add any todo</button>
      {todo.map(todoOn => {
        return <Todo title={todoOn.title} description={todoOn.description} />
      })}
    </div>
  )
}


//title
// description
// completed
function Todo (props) {

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}


export default App
