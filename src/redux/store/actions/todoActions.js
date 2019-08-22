/*
Action creators that deal with the todo aspect, such as
add todo, delete todo on completion, etc
*/

export const addTodo = (todo) => {
    // allowed args getfirebase, getfirestore in index.js
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        // get uid to keep track of which user wrote which todo
        const userId = getState().firebase.auth.uid;


        // when adding a todo, completed will always be false first
        firestore.collection('todos').add({
            todo: todo.todo,
            completed: false,
            lastUpdated: new Date(),
            authorId: userId,
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