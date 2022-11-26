import { GET_EMPLOYEES, ADD_EMPLOYEES, DELETE_EMPLOYEES, EDIT_EMPLOYEES } from "../actions/actionTypes"

const initialState = {
    employees: [],
    loading: true
}

export const empReducers = (state = initialState, action) => {

    switch (action.type) {
        
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false
            }

        case ADD_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }

        case DELETE_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };
        case EDIT_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };

        default: return state
    }

}