/*
Action creators that deal with the event/calendar aspect, such as
add event, delete event, etc
*/

export const addEvent = (event) => {
    return (dispatch, getState) => {
        // make async call to db
        
        // make dispatch call to reducer after async call done
        dispatch({
            type: 'ADD_EVENT',
            eventToAdd: event,
        })
    }
}