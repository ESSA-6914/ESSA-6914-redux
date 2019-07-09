import { SEARCH_STUDENT } from "../constants/actionsTypes";
const searchReducer = (state = '', action) => {
    if(action.type === SEARCH_STUDENT) {
        return action.search
    }
    return state
}

export default searchReducer