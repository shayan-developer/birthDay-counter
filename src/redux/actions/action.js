import { COUNT, DATA, LOADING, MODAl } from "../types/types"

export const isloading = () => {
    return {
        type: LOADING,
        
    }
}
export const checkmodal = (boolean) => {
    return {
        type: MODAl,
        check:boolean
        
    }
}
export const checkCount = (num) => {
    return {
        type: COUNT,
        check:num
        
    }
}
export const getpeople = (data) => {
    return {
        type: DATA,
        data:data
        
    }
}

