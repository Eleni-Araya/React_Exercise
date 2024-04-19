import React, { useEffect, useState } from 'react'
import List from '../../components/List/list.components'
import Detail from '../../components/List/detail.components'
import Product from '../../types/product';
import productService from '../../apis/services/product.service';

export default function Productlist() {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        async function getProducts() {
            const response = await productService.getAll();
            setProducts(response.data);
        }
        getProducts();
    }, []);

    const deleteProductById = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    }
    return (
        <div className='row mt-5'>
            <List />
            <Detail onDeleteProductById={deleteProductById} />
        </div>
    )
}
