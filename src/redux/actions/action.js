import { GET_BIRTH, GET_DATA } from "../types/types"

export const getData =()=>{

    return{
        type:GET_DATA
    }
}

export const getBirth =()=>{
    return{
        type:GET_BIRTH
    }
}