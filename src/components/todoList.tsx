import React from 'react'
import { ITodo } from '../types/data'
import TodoItem from './todoItem'

interface ITodoList {
   items: ITodo[]
   removeTodo: (id: number) => void
   toggleTodo: (id: number) => void
}



function TodoList(props: ITodoList) {
   const { items, removeTodo, toggleTodo } = props





   return (
      <div>
         {
            items.map(item => (
               <TodoItem key={item.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  {...item} />
            ))
         }
      </div>
   )
}

export default TodoList
