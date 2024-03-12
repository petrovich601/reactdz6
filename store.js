import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialProducts = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10, available: true },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 20, available: true },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 30, available: false }
];

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.findIndex(product => product.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedProduct };
            }
        },
        toggleAvailability: (state, action) => {
            const { id, available } = action.payload;
            const index = state.findIndex(product => product.id === id);
            if (index !== -1) {
                state[index].available = available;
            }
        }
    }
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;

export default configureStore({
    reducer: {
        products: productsSlice.reducer
    }
});