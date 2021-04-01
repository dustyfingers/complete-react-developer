// a reducer is an object that has 2 properties: a state object, and an action
// an action is an object that hs two properties: a type and a payload (which can be anything)

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...currentState,
                currentUser: action.payload
            };
        default:
            return currentState;
    }
}

export default userReducer;