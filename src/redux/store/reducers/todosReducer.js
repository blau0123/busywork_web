const initState = {
    todoList:[
        
    ]
}

const todosReducer = (state = initState, action) => {
    // determine which action to perform on state of todos
    switch(action.type){
        case 'ADD_TODO':
            console.log('added todo');
    }
    return state;
}

export default todosReducer;