const loginPageReducer = (state=true, action) =>{
    switch(action.type){
        case "registrationPageActive":
            return !state
        default:
            return state
    }
}

export default loginPageReducer