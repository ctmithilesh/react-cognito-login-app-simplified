import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Config from './Config'

const poolData = {
  UserPoolId: Config.UserPoolId,
  ClientId: Config.AppClientId
}

export default new CognitoUserPool(poolData);