/*
Action creators that deal with the event/calendar aspect, such as
add event, delete event, etc
*/

export const addEvent = (event) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('events').add({
            title: event.title,
            description: event.description,
            location: event.location,
            startTime: event.startTime,
            endTime: event.endTime,
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