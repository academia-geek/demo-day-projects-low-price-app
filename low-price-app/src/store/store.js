import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { estacionesReducers } from "../redux/reducers/estacionesReducers";
import { favoritosReducers } from "../redux/reducers/favoritosReducers";
import { loginReducers } from "../redux/reducers/loginReducers";
import { registerReducers } from "../redux/reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducersEnviar = combineReducers({
  login: loginReducers,
  register: registerReducers,
  estaciones: estacionesReducers,
  favoritos: favoritosReducers
})

export const store = createStore(
  reducersEnviar,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)