import * as types from './types'

let UUId = 3

export const addTodo = todo => {
  return {
    type: types.ADD_TODO,
    todo: {...todo, id: UUId++}
  }
}

export const deleteTodo = id => {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export const removeTodo = id => {
return {
  type: types.REMOVE_TODO,
  id
}
}

export const toggleTag = currentTag => {
  return {
    type: types.TOGGLE_TAG,
    currentTag
  }
}

export const toggleTodoTag = id => {
  return {
    type: types.TOGGLE_TODO_TAG,
    id
  }
}

export const changeTodoId = index => {
  return {
    type: types.CHANGE_TODO_ID,
    index
  }
}

export const contentEdit = (content, id) => {
  return {
    type: types.CONTENT_EDIT,
    content,
    id
  }
}