import { data } from "./data"
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