import { LOGIN_USER,LOGOUT_USER } from './types'
const initialState = {
    user_info: null,
    login_status:false
};
const loginReducer = (state = initialState,action)=>{

    const newState = {...state}

    switch(action.type){

        case LOGIN_USER:
            newState.user_info = action.payload
            newState.login_status = true
        break;
        case LOGOUT_USER:
            newState.user_info = null
            newState.login_status = false
        break;

        default:
        return newState;

    }
    return newState;
}
export default loginReducer;