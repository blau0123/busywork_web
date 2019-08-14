import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import notesReducer from './notesReducer';
import todosReducer from './todosReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    notes: notesReducer,
    todos: todosReducer
})

export default rootReducer;