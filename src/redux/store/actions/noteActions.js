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
            lastUpdated: new Date(),
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

export const updateNote = (note) => {
    // passed in title, body, and id from notedetail state as note
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            body: note.body,
            lastUpdated: new Date(),
        }).then(() => {
            dispatch({
                type: 'UPDATE_NOTE',
            })
        }).catch((err) => {
            dispatch({
                type: 'UPDATE_NOTE_FAIL',
                error: err,
            })
        })
    }
}