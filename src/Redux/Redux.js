import {createStore} from "redux";

const initialState ={
    value_select: "asc",
    value_checked_male: true,
    value_checked_female: true,
    value_filter_by_price: 0,
}

export const reducer = (state, action) =>{
    switch (action.type){
        case 'ACTION_SELECT': return {...state,value_select: action.value};
        case 'ACTION_MALE_CHECKED': return {...state,value_checked_male: action.value}
        case 'ACTION_FEMALE_CHECKED': return {...state,value_checked_female: action.value}
        case 'ACTION_FILTER_CHANGED': return {...state,value_filter_by_price: action.value}
        default: return state
    }
}
export const store = createStore(reducer, initialState)


export function actionSelected(value) {
    return {
        type: 'ACTION_SELECT',
        value: value
    };
}
export function actionCheckedMale(value) {
    return{
        type:'ACTION_MALE_CHECKED',
        value: value
    };
}
export function actionCheckedFemale(value) {
    return{
        type:'ACTION_FEMALE_CHECKED',
        value: value
    }

}
export function actionFilterChanged(value) {
    return{
        type:'ACTION_FILTER_CHANGED',
        value: value
    };
}