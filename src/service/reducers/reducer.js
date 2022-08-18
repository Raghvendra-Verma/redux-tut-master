import { ADD_TO_CART } from '../constants'
import { REMOVE_TO_CART } from '../constants'


export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
             //console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_TO_CART:
             //console.warn("reducer",action)
            state.pop();
            return [
                ...state,
                
            ]
        default:
            return state
    }
}
    