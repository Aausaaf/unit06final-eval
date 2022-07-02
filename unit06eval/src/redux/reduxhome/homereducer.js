import { DATA } from "./action"


export const reducerhome = (state = [],{type,payload}) => {
  switch(type) {
    case DATA:{
        return{
          state:payload
        }
    }
 
    default:{
        return state
    }
  }
}