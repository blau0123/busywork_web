const initState = {
    todoList:[
        
    ]
}

const todosReducer = (state = initState, action) => {
    // determine which action to perform on state of todos
    switch(action.type){
        case 'ADD_TODO':
            console.log('added todo');
            return state;
        case 'COMPLETED_SUCCESS':
            console.log('completed action');
            return state;
        default:
            return state;
    }
}

export default todosReducer;