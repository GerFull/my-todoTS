import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useRef, useState } from 'react'
import { ITodo } from '../types/data'
import TodoList from './todoList'


interface Props {

}

function App(props: Props) {
   const { } = props

   const [value, setValue] = useState('')
   const [todos, setTodos] = useState<ITodo[]>([])


   const inputRef = useRef<HTMLInputElement>(null)


   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value)
   }

   const handeKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') addTodo()

   }

   const addTodo = () => {

      if (value) {
         setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
         }])
         setValue('')
      }

   }



   const removeTodo = (id: number): void => {
      setTodos(todos.filter(item => item.id !== id))
   }


   const toggleTodo = (id: number): void => {
      setTodos(todos.map(item => {
         if (item.id !== id) return item;
         return {
            ...item,
            complete: !item.complete
         }
      }))
   }

   useEffect(() => {
      inputRef.current?.focus()
   })

   return (
      <div>

         <div>
            <input value={value} onChange={handleChange} onKeyDown={handeKeyDown} ref={inputRef} />
            <button onClick={addTodo}> Add</button>
         </div>
         <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
   )
}

export default App


