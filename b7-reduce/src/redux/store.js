import { createStore } from "redux";
const defaultState = {
    number:10,
}

const reducers = (state,action) => {
    switch(action.type) {
        case "GET_NUMBER": return {number: Math.round(Math.random()*10)}
        
        case "RESET_NUMBER": return {number: 10}
        default: return defaultState;
        
    }
}

const store = createStore(reducers);

export default store;