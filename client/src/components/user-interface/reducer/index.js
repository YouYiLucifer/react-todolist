// const INIT_TODOS = 'INIT_TODOS'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TAG = 'TOGGLE_TAG'
const CHANGE_TODO_ID = 'CHANGE_TODO_ID'
const CONTENT_EDIT = 'CONTENT_EDIT'

const initState = {
  todos: [
    {title: 'todo1', content: '111', tag: '所有'}, 
    {title: 'todo2', content: '222', tag: '已完成'},
    {title: 'todo3', content: '333', tag: '所有'}
  ],
  currentTag: '所有',
  currentToDoId: 0
}

//actions
// export const initTodos = todos => {
//   return {
//     type: INIT_TODOS,
//     todos
//   }
// }

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    index
  }
}

export const toggleTag = currentTag => {
  return {
    type: TOGGLE_TAG,
    currentTag
  }
}

export const changeTodoId = index => {
  return {
    type: CHANGE_TODO_ID,
    index
  }
}

export const contentEdit = todo => {
  return {
    type: CONTENT_EDIT,
    todo
  }
}

//reducer
export default (state = initState, action) => {
  switch(action.type) {
    // case INIT_TODOS:
    //   return {
    //     todos: action.todos
    //   }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.splice(0, action.index),
          ...state.todos.splice(action.index + 1)
        ]
      }
    case TOGGLE_TAG:
      return {
        ...state,
        currentTag: action.currentTag
      }
    case CHANGE_TODO_ID: 
      return {
        ...state,
        currentToDoId: action.index
      }
    case CONTENT_EDIT:
      return {
        ...state
      }
    default:
      return state
  }
}