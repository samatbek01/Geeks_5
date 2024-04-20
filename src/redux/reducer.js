// const initialState = {
//     title:'old title',
//     value:'',
//     users:[]
// }
//
// export default  function  reducer (state = initialState , action){
//     if (action.type === 'CHANGE_TITLE'){
//         return {...state,title:'new title'}
//     } else if (action.type === 'INPUT_VALUE'){
//         return {...state,value: action.payload}
//     }else if (action.type === 'ADD_USER'){
//         return {...state ,users:[...state.users , action.payload],value: ''}
//     }else if (action.type === 'DELETE_ALL'){
//         return {...state , users:[],value:''}
//     }
//     return state
// }

const initialState = {
    const: 0
}
export default function reducer(state=initialState,action){
    if (action.type === 'HANDLE_COUNT'){
        if (state.count + action.payload>=0){
            return {count: state.count + action.payload}
        }
    }else if (action.type === 'DELETE_COUNT'){
        return {count: 0}
    }
    return state
}