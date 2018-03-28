import {combineReducers} from 'redux';
import auth from './authReducer';
import result from './gameReducer'
import { reducer as formReducer } from 'redux-form';


const rootReducrs = combineReducers({
    form: formReducer,
    auth,
    result
 
});
export default rootReducrs;