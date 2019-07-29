import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, LOGIN } from './actionsTypes'

let TodoId = 2

export const login = (info) => ({
    type: LOGIN,
    userId: info.userId,
    email: info.email,
    userType: info.userType,
    isLoggedIm: true
})

// export const addTodo = text => ({
//     type: ADD_TODO,
//     id: TodoId++,
//     text
// })

// export const deleteTodo = (id) => ({
//     type: REMOVE_TODO,
//     id: id
// })

// export const toggleTodo = (id) => ({
//     type: TOGGLE_TODO,
//     id: id
// })

// export const setVisibilityFilter = filter => ({
//   type: SET_VISIBILITY_FILTER,
//   filter
// })