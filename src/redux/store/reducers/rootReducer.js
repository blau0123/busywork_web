import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import notesReducer from './notesReducer';
import todosReducer from './todosReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    notes: notesReducer,
    todos: todosReducer,
    // for firestore database
    firestore: firestoreReducer,
    // for firebase auth
    firebase: firebaseReducer,
})

export default rootReducer;