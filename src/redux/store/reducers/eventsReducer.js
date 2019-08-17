const initState = {
    eventList:[
        {id:'1', title:'eat ass', description:'remember to get ebola', location:'elysia\'s ass'}
     ]
}

const eventsReducer = (state = initState, action) => {
    // determine which action to perform on the state of events
    switch(action.type){
        case 'ADD_EVENT':
            console.log('event added');
    }
    return state;
}

export default eventsReducer;