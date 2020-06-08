let initialState = {repos:[], author:{}, activeRepo:'',issues:[], nextAPI:''}

export default (state=initialState, action) => {
        
    let {type, payload} = action;
    switch(type) {
        case 'INIT':
            return{...state, repos:state.repos.concat(payload.list),nextAPI:payload.nextAPI}
        
        case 'ADD_MORE':
            return{...state, repos:state.repos.concat(payload.list),nextAPI:payload.nextAPI}

        case 'GET_AUTHOR':
            return {...state, author:payload}

        case 'LOAD_ISSUES':
            return {...state,issues:payload}

        case 'GET_NAME':
            return {...state, activeRepo:payload}
            
        default: return state;
    }

}
