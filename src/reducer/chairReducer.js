import { chairArr } from "../component/data"
import { ADD_TO_CART } from "../constant/constant";

const initialState = {
    chairArr: chairArr,
}

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:{
            let cloneCart = [...state.cart];
            // let index = cloneCart.findIndex((item)=>{
            //     return item.soGhe == payload.soGhe;
            // })
            return { ...state, cart: cloneCart };
        }
        // let cloneCart = [...state.cart];
        // let index = cloneCart.findIndex((item) => {
        //   return item.id == payload.id;
        // });
        // if (index == -1) {
        //   // sp chưa có
        //   let newShoe = { ...payload, soLuong: 1 };
        //   cloneCart.push(newShoe);
        // } else {
        //   // đã có
        //   cloneCart[index].soLuong++;
        // }
        // return { ...state, cart: cloneCart };
        default:
            return state;
    }
};
