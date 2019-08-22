const initState = {
    noteList: [

    ]
}

const notesReducer = (state = initState, action) => {
    // check which action to perform on state of notes
    switch(action.type){
        case 'ADD_NOTE':
            console.log('added note', action.type);
            return state;
        case 'ADD_NOTE_FAIL':
            console.log('failure adding note', action.error);
            return state;
        case 'UPDATE_NOTE':
            console.log('updated note!');
            return state;
        case 'UPDATE_NOTE_FAIL':
            console.log('failed to update note', action.error);
            return state;
        case 'DELETE_SUCCESS':
            console.log('deleted note!');
            return state;
        case 'DELETE_FAIL':
            console.log('delete failed!');
            return state;
        default:
            return state;
    }
}

export default notesReducer;