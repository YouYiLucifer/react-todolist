const INIT_TODOS = 'INIT_TODOS'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

//actions
export const initComments = (todos) => {
  return {
    type: INIT_TODOS,
    todos
  }
}

export const addComment = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const deleteComment = (index) => {
  return {
    type: DELETE_TODO,
    index
  }
}

//reducer
export default (state = { todos: [] }, action) => {
  switch(action.type) {
    case INIT_TODOS:
      return {
        todos: action.todos
      }
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      }
    case DELETE_TODO:
      return {
        comments: [
          ...state.todos.splice(0, action.index),
          ...state.todos.splice(action.index + 1)
        ]
      }
    default:
      return state
  }
}