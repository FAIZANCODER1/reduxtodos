export const Todoadd=(data)=>{
    return{
        type:"AddTODO",
        payload:{
            id: new Date().getTime().toString(),
        data:data        }
    }
}
export const Tododel=(id)=>{
    return{
        type:"DELTODO",
    id
    }


}

export const Todoremove=()=>{
    return{
        type:"TODOREM"
    }
}