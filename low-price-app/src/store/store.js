import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../redux/reducers/loginReducers";
import { lugaresReducers } from "../redux/reducers/lugaresReducers";
import { registerReducers } from "../redux/reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducersEnviar = combineReducers({
  login: loginReducers,
  register: registerReducers,
  lugares: lugaresReducers

})

export const store = createStore(
  reducersEnviar,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
