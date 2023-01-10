import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogoutUser } from './redux/setLogoutUser'
import { fetchRandomUsers } from './APIs/fetchRandomUsers'
import Pool from './UserPool'
export default function Dashboard() {

    const [random,setRandom] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchRandomUsersAPI = async ()=>{
            const data = await fetchRandomUsers()
            console.log(data)
            setRandom(data)
        
        }
        fetchRandomUsersAPI()

       

    },[])


    const logoutUser = () => {
        const user = Pool.getCurrentUser();
        if (user) user.signOut();
        setLogoutUser(dispatch);
      };

    console.log(random)
  return (
    <>
       {random != null && random.length ? random.map((item,index)=>(
            <div key={index}>
                <img
                    src={item.picture.large}
                />
                <h1>{item.name.first} {item.name.last}</h1>
                <h1>{item.gender}</h1>
                <h1>{item.location.country}</h1>

            </div>


       )): <span> Loading...</span>}
       <button onClick={()=> logoutUser()}> Logout </button>
    </>
  )
}
