export const GET_EMPLOYEES = () => {
    return{
        type:'GET_EMPLOYEES'
    }
}

export const ADD_EMPLOYEES = (id) => {
    return{
        type:'ADD_EMPLOYEES',
        payload:id
    }
}
export const DELETE_EMPLOYEES = (id) => {
    return{
        type:'DELETE_EMPLOYEES',
        payload:id
    }
}
export const EDIT_EMPLOYEES = (id) => {
    return{
        type:'EDIT_EMPLOYEES',
        payload:id
    }
}
