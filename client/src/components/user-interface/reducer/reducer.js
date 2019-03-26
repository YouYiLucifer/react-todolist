import * as types from './types'
import store from '../../../common/js/store'

// const localState = store.localFetch()

const initState = {
  todos: store.localFetch(),
  currentStatus: '未完成',
  currentTodoId: 0
}

export default (state =initState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? todo.status !== '已删除' ? {...todo, status: '已删除'} : todo : todo
        )
      }
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case types.TOGGLE_STATUS:
      return {
        ...state,
        currentStatus: action.currentStatus
      }
    case types.TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? todo.status === '未完成' ? {...todo, status: '已完成'} : {...todo, status: '未完成'} : todo
        )
      }
    case types.CHANGE_TODO_ID: 
      return {
        ...state,
        currentTodoId: action.index
      }
    case types.CONTENT_EDIT:
      return {
        ...state,
        todos: state.todos.map(todo => 
                  todo.id === action.id ? {...todo, content: action.content} : todo
                )
      }
    default:
      return state
  }
}

// {title: 'aa', content: 'aaa', status: '未完成', tag: '工作', id: 0},
//     {title: 'bb', content: 'bbb', status: '已完成', tag: '生活', id: 1},
//     {title: '如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。', content: 'ccc', status: '未完成', id: 2}