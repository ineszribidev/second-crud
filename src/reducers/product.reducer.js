const initialState = {
    products: []
}
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                products: state.products.concat([action.product])
            }
        default:
            return state;
    }
}
export default ProductReducer;
