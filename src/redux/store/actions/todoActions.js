/*
Action creators that deal with the todo aspect, such as
add todo, delete todo on completion, etc
*/

export const addTodo = (todo) => {
    return (dispatch, getState) => {
        // make async call to db
        
        // make dispatch call to reducer after async call done
        dispatch({
            type: 'ADD_TODO',
            todoToAdd: todo,
        })
    }
}