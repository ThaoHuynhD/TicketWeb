import { chairArr } from "../component/data"
import { ADD_TO_CART, REMOVE_CART } from "../constant/constant";

const initialState = {
    chairArr: chairArr,
    cart: [],
    detail: chairArr[0],
}

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => {
                return item.soGhe === payload.soGhe;
            });
            if (index === -1) {
                let newChair = { ...payload };
                cloneCart.push(newChair);
            }
            return { ...state, cart: cloneCart };
        }
            case REMOVE_CART: {
                let cloneCart = [...state.cart];
                console.log("REMOVE_CART");
                let index = cloneCart.findIndex((item) => {
                    return item.soGhe === payload.soGhe;
                });
                cloneCart.splice(index, 1);
                return { ...state, cart: cloneCart };
            }
        default:
            return state;
    }
};
