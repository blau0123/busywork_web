const initState = {
    // if true, then error when signing in
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch( action.type ){
        case 'SIGNIN_SUCCESS':
            console.log("signed in!");
            return {
                ...state,
                authError: null,
            }
        case 'SIGNIN_FAIL':
            console.log("sign in failed");
            return {
                ...state,
                authError: action.error,
            }
        case 'SIGNOUT_SUCCESS':
            console.log("signed out successfully");
            return state;
        case 'SIGNOUT_FAIL':
            console.log("sign out failed");
            return state;
        case 'SIGNUP_SUCCESS':
            console.log("signed up successfully");
            return {
                ...state,
                authError: null,
            }
        case 'SIGNUP_FAIL':
            console.log("signed up failed");
            return {
                ...state,
                authError: action.error.message,
            }
        default:
            return state;
    }
}

export default authReducer;