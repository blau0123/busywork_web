/*
Action creators that deal with the event/calendar aspect, such as
add event, delete event, etc
*/

export const addEvent = (event) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        // get uid to keep track of which user wrote which event
        const userId = getState().firebase.auth.uid;

        firestore.collection('events').add({
            title: event.title,
            description: event.description,
            location: event.location,
            startTime: event.startTime,
            endTime: event.endTime,
            authorId: userId,
        }).then(() => {
            // make dispatch call to reducer after async call done
            dispatch({
                type: 'ADD_EVENT',
                eventToAdd: event,
            })
        }).catch((err) => {
            // dispatch fail action if add event fails
            dispatch({
                type: 'ADD_EVENT_FAIL',
                error: err,
            })
        })
    }
}

export const deleteEvent = (event) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('events').doc(event.id).delete().then(() => {
            dispatch({
                type: 'DELETE_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'DELETE_FAIL',
                error: err,
            })
        })
    }
}