import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../Store/store.js';

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteProduct(id));
    };

    const handleToggleAvailability = (id, available) => {
        dispatch(toggleAvailability({ id, available: !available }));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.name}</strong> - {product.description} - ${product.price} - Available: {product.available ? 'Yes' : 'No'}
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                            <button onClick={() => handleToggleAvailability(product.id, product.available)}>
                                {product.available ? 'Make Unavailable' : 'Make Available'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;