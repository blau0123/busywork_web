/*
Action creators that deal with the todo aspect, such as
add todo, delete todo on completion, etc
*/

export const addTodo = (todo) => {
    // allowed args getfirebase, getfirestore in index.js
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        // when adding a todo, completed will always be false first
        firestore.collection('todos').add({
            todo: todo.todo,
            completed: false,
            createdAt: new Date(),
        }).then(() => {
            // make dispatch call to reducer after async call done
            dispatch({
                type: 'ADD_TODO',
                todoToAdd: todo,
            })
        }).catch((err) => {
            // if fail to add todo, dispatch different action to handle failure
            dispatch({
                type: 'ADD_TODO_FAIL',
                error: err,
            })
        })
    }
}