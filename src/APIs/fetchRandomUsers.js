import axios from "axios"
let data = null
export const fetchRandomUsers = async ()=>{
    await axios.get('https://api.randomuser.me/')
            .then(res=>{
                console.log(res)
                data = res.data.results
            })
            .catch(err=>{
                console.log(err)
            })
    return data

}