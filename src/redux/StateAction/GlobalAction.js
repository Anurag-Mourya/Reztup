import store from "../store"
export const showCategoryModal = (value) => {
    store.dispatch({
        type: "SET_CATEGORY_MODAL",
        payload: value
    })
}
