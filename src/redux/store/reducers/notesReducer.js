const initState = {
    noteList: [
       {id:'1', title:'yeet', body:'yeet'},
    ]
}

const notesReducer = (state = initState, action) => {
    // check which action to perform on state of notes
    switch(action.type){
        case 'ADD_NOTE':
            console.log('added note', action.type);
        case 'ADD_NOTE_FAIL':
            console.log('failure adding note', action.error);
    }
    return state;
}

export default notesReducer;