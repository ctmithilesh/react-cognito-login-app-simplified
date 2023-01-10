import { LOGIN_USER } from './types'
export const setLoginUser = async(dispatch,data)=>{

    console.log(data)
    dispatch({
        type: LOGIN_USER,
        payload: data
    });

}