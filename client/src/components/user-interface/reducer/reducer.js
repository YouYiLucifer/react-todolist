import * as types from './types'

const initState = {
  todos: [
    {title: 'aa', content: 'aaa', tag: '未完成', id: 0},
    {title: 'bb', content: 'bbb', tag: '已完成', id: 1},
    {title: '如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。', content: 'ccc', tag: '未完成', id: 2}
  ],
  currentTag: '未完成',
  currentTodoId: 0
}

export default (state = initState, action) => {
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
          todo.id === action.id ? todo.tag !== '已删除' ? {...todo, tag: '已删除'} : todo : todo
        )
      }
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case types.TOGGLE_TAG:
      return {
        ...state,
        currentTag: action.currentTag
      }
    case types.TOGGLE_TODO_TAG:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? todo.tag === '未完成' ? {...todo, tag: '已完成'} : {...todo, tag: '未完成'} : todo
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