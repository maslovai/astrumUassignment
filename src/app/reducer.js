let initialState = {repos:[]}

export default (state=initialState, action) => {

    let {type, payload} = action;
  
    switch(type) {
        case 'INIT':
            console.log("in reducer ", payload)
            return{...state, repos:state.repos.concat(payload.list),nextAPI:payload.nextAPI}
        
        case 'ADD_MORE':
            return{...state, repos:state.repos.concat(payload.list),nextAPI:payload.nextAPI}

        case 'GET_AUTHOR':
            console.log("in reducer ", payload)
            return {...state, author:payload}
            
        default: return state;
    }

}
