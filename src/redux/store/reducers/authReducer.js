const initState = {
    // if true, then error when signing in
    authError: false,
}

const authReducer = (state = initState, action) => {
    switch( action.type ){
        case 'SIGNIN_SUCCESS':
            console.log("signed in!");
            return {
                ...state,
                authError: false,
            }
        case 'SIGNIN_FAIL':
            console.log("sign in failed");
            return {
                ...state,
                authError: true,
            }
        default:
            return state;
    }
}

export default authReducer;