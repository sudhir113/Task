import * as types from '../action/actionTypes';
import InitialState from './initialState';

const authReducer =(state=InitialState.auth,action) => {
   switch(action.type){
       case types.AUTH_USER:
         return {...state,error: '', authenticated: true}
       case types.UNAUTH_USER:
          return {...state ,authenticated:false}
       case types.AUTH_ERROR:
          return {...state,error:action.error} 
       default:
         return state       
   }
}
export default authReducer;