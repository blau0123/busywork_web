/*
Action creators that handle user authentication using firebase auth,
such as signing a user in and logging a user out
*/

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password
        ).then(() => {
            dispatch({
                type: 'SIGNIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNIN_FAIL',
                error: err,
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS',
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNOUT_FAIL',
                error: err,
            })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // create new user on the auth service
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, newUser.password
        ).then((response) => {
            // add new user to firestore users collection
            firestore.collection('users').doc(response.user.id).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
            })
        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS',
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_FAIL',
                error: err,
            })
        })
    }
}