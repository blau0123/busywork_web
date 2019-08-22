const initState = {
    eventList:[

    ]
}

const eventsReducer = (state = initState, action) => {
    // determine which action to perform on the state of events
    switch(action.type){
        case 'ADD_EVENT':
            console.log('event added');
            return state;
        case 'ADD_EVENT_FAIL':
            console.log('fail to add event');
            return state;
        case 'DELETE_SUCCESS':
            console.log('deleted event!');
            return state;
        case 'DELETE_FAIL':
            console.log('delete failed!');
            return state;
        default:
            return state;
    }
}

export default eventsReducer;