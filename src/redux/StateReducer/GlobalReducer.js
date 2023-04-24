const initialValue = {
    showCategoryModal: false,
};

const globalData = (state = initialValue, action) => {
    switch (action.type) {

        case "SET_CATEGORY_MODAL":
            return { ...state, showCategoryModal: action.payload };

        default:
            return state;
    }
};
export default globalData;