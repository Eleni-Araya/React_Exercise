import React, { useEffect, useState, MouseEvent } from 'react'
import PubSub from 'pubsub-js';
import Product from '../../types/product'
import productService from '../../apis/services/product.service';

import './List.css';

export default function List() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await productService.getAll();
            setProducts(response.data);
        }
        getProducts();
    }, []);

    const showDetail = (prod: Product, e: MouseEvent<HTMLLIElement>) => {
        PubSub.publish('products', prod);
        // e.currentTarget.classList.add('highlighted');
    }

    return (
        <div className="col">
            <ul className="list-group">
                {products.map(prod => <li
                    key={prod.id}
                    className="list-group-item list-group-item-action"
                    onClick={(e) => showDetail(prod, e)}
                >{prod.title}</li>)}
            </ul>
        </div>
    )
}