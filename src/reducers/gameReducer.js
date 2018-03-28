import * as types from '../action/actionTypes';
import InitialState from './initialState';

const gameReducer =(state=InitialState.result,action) => {
   switch(action.type){
       case types.GET_VALUE:
         return[...state, { ...action.result }];
       case types.ONCHANGE_INPUT:
         return {size:action.size}  
       default:
         return state       
   }
}
export default gameReducer;