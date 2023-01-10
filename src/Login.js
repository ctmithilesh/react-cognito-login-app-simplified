import React from 'react'
import './index.css'
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./UserPool";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { setLoginUser } from './redux/setLoginUser';
export default function Login(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitData = async (data) => {

        console.log(data);
        await authenticate(data.name, data.password);
    
      };

    const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess:", data);
          resolve(data);
          setLoginUser(dispatch,data)
          navigate({
            pathname:'/dashboard'
          })
        },

        onFailure: (err) => {
          props.setError(err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          props.setError("New Password Required");
          resolve(data);
        },
      });
    });


  return (
    <div class="login">
        <h1>My Login System</h1>
        <form onSubmit={handleSubmit(submitData)}>
            <input 
                type="text"
                placeholder="Enter Username"
                name="name"
                {...register('name',{required:true})}
            /> <br />
            {errors.name && <p>Username is Required!</p>}
            <input 
                type="text"
                placeholder="Enter Password"
                name="password"
                {...register('password',{required:true})}
            /> <br />
            {errors.password && <p>Password is Required!</p>}
            <button >Login</button>

        </form>


    </div>
  )
}
