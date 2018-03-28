import * as types from './actionTypes';

export const gamedata =(result) => {
    return {
        type:types.GET_VALUE,result
    }
}

export function gameAction(data){
	console.log('data',data);
    return (dispatch) => {
        dispatch(gamedata(data))
    }
}

export function onChangeInput(size) {
  return {
      type:types.ONCHANGE_INPUT,size
  }
}
