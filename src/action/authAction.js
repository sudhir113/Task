import * as types from './actionTypes';
import axios from 'axios';
import AppConfig from '../config/config';
import History from '../history';

const ROOT_URL = AppConfig.baseUrl;

export const register =({email, password}) => {
    console.log('register calld')
     return (dispatch) => {
          axios.post(`${ROOT_URL}/signup`, {email,password})
          .then(response => {
              console.log(response)
            dispatch({ type:types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            History.push('/dashboard');
          }).catch(err => {
              dispatch(authError(err.response.data.error))
          })
     }
}

export const authError =(error) => {
    return {
        type:types.AUTH_ERROR,error
    }
}
export const login =({email,password})=> {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin` ,{email,password})
        .then(response => {
            console.log(response);
            dispatch({ type:types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            History.push('/dashboard');
        }).catch(err => {
            console.log('errorrrr',err);
            if(err == 'Network Error'){
                dispatch(authError('No Enternet connection'))
            }else {
            dispatch(authError('Bad Login Info'))
            }
        })
    }
}

export const logout =() => {
    localStorage.removeItem('token');
     return { type: UNAUTH_USER };
}