export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

let nextTodoId = 0

export const addTodo = task => ({
  type: ADD_TODO,
  id: ++nextTodoId,
  task
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})
