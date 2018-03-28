import { createStore, applyMiddleware } from 'redux';
import rootReducrs from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';



export default function configureStore(initialState) {
    return createStore(
       rootReducrs,
        initialState,
        applyMiddleware(thunk,reduxImmutableStateInvariant())
    );
}
