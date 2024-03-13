import { init } from "@/utils/init"

export const appReducer = (state=init,action)=>{
switch(action.type){
    case 'Name_UPDATE':
        return  {

            ...state,
            name:action.payload
        }
        case 'LOC_UPDATE' :
            return {

                ...state,
                loc:action.payload
            }
}

   return state;

}


