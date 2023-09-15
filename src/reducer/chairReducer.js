import { chairArr } from "../component/data"

const initialState = {
    chairArr: chairArr,
}

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}
