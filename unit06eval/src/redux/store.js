import { reducerlog } from "./reducerlog";
import { reducerhome } from "./reduxhome/homereducer";
import { legacy_createStore as createStore , combineReducers } from "redux";
const rootreducer = combineReducers({
    
    log:reducerlog,
    dats:reducerhome,
}) 
export const store = createStore(rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )