import React from 'react';
import products from '../data';

function Products() {
    return (
        <div>
            {}
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
