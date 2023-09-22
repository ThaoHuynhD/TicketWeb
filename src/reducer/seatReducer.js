import { SELECT_SEAT, DESELECT_SEAT, PAYMENT_COMPLETE } from "../constant/constant";

const initialState = {
    cart: [],
}

export let seatReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECT_SEAT: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => {
                return item.soGhe === payload.soGhe;
            });
            if (index === -1) {
                let newSeat = { ...payload };
                cloneCart.push(newSeat);
            }
            return { ...state, cart: cloneCart };
        }
        case DESELECT_SEAT: {
            let cloneCart = [...state.cart];
            console.log("DESELECT_SEAT");
            let index = cloneCart.findIndex((item) => {
                return item.soGhe === payload.soGhe;
            });
            cloneCart.splice(index, 1);
            return { ...state, cart: cloneCart };
        }
        case PAYMENT_COMPLETE: {
            return { ...state, cart: [] };
          }
        default:
            return state;
    }
};