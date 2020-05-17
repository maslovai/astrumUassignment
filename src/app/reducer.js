let initialState = []

export default (state=initialState, action) => {

    let {type, payload} = action;
  
    switch(type) {
        case 'INIT':
            console.log("in reducer ", payload)
        return payload || initialState;
        
        case 'ADD_MORE':
            return [... state, payload];
        
        default: return state;
    }

}
