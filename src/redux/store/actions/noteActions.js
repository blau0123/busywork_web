/*
Action creators that deal with the notes aspect, such as
add note, delete note, etc
*/

export const addNote = (note) => {
    return (dispatch, getState) => {
        // make async call to db
        
        // make dispatch call to reducer after async call done
        dispatch({
            type: 'ADD_NOTE',
            noteToAdd: note,
        })
    }
}