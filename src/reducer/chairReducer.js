import { chairArr } from "../component/data"
import { ADD_TO_CART } from "../constant/constant";

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
              let newChair = { ...payload};
              cloneCart.push(newChair);
            } else {
              cloneCart[index].soLuong++;
            }
            return { ...state, cart: cloneCart };
          }
        default:
            return state;
    }
};
