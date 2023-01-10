import { data } from "./data"

// User Pool ID: ap-south-1_aGchBKOL3
// App Client Id: 29b8n20s0onououhumrj6b6qqr
// region : ap-south-1


//Variables to replace
const poolId = data.USER_POOL_ID
const clientId = data.APP_CLIENT_ID
const api = data.API

const Config = {
    UserPoolId: poolId,
    AppClientId: clientId,
    ApiURL: api
}

export default Config