import { LOGOUT_USER } from './types'
export const setLogoutUser = async(dispatch,data)=>{

    console.log(data)
    dispatch({
        type: LOGOUT_USER,
        payload: data
    });

}