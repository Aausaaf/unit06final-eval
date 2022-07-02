import { LOGIN } from "./action";


export const reducerlog = (state={},{type,payload}) => {
    switch(type)
    {
        case LOGIN: {
            return {
                ...state,login:payload
            }
        }
   
        default : {
            return{
                state
            }
        }
}
}