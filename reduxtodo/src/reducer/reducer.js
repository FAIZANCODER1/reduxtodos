const i={
    list:[]
}
export const todoreducers=(state=i,action)=>{
switch (action.type) {
    case "AddTODO":
        const {id , data} =action.payload
        return {
          if (data ='') {
             
          }
          ,
          
            ...state,list:[
                ...state.list,
                {
                    id:id,
             data:data
            }]
        }
        case "DELTODO":
        const newlist =    state.list.filter((elem)=>elem.id !== action.id)
            return{
    
                    ...state,list:newlist

            }
            case 'TODOREM':
                return{
                    ...state, list:[]
                }

        

    default: return state;
}

}
