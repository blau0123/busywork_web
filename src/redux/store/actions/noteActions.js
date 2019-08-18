/*
Action creators that deal with the notes aspect, such as
add note, delete note, etc
*/

export const addNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        // add new doc to 'notes' collection in firestore
        firestore.collection('notes').add({
            title: note.title,
            body: note.body,
            createdAt: new Date(),
        }).then( () => {
                // make dispatch call to reducer after async call done
                dispatch({
                    type: 'ADD_NOTE',
                    noteToAdd: note,
                });
            }).catch((err) => {
                // if adding note failed, dispatch failure to tell user
                dispatch({
                    type: 'ADD_NOTE_FAIL',
                    error: err,
                })
        })
    }
}