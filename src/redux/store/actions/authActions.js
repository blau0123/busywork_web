
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