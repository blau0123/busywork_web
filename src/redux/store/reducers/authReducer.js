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
        case 'SIGNOUT_SUCCESS':
            console.log("signed out successfully");
            return state;
        case 'SIGNOUT_FAIL':
            console.log("sign out failed");
            return state;
        default:
            return state;
    }
}

export default authReducer;