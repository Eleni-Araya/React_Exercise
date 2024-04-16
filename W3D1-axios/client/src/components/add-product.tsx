import React, { FormEvent, useState } from 'react'
import Product from '../types/product';
import axios from 'axios';
import productService from '../apis/services/product.service';

type Props = {
    onAddNewProd: (prod: Product) => void
}
export default function AddProduct(props: Props) {
    const { onAddNewProd } = props
    const [products, setProducts] = useState<Product>({ title: '', price: 0, description: '' })
    const { title, price, description } = products



    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const response = await axios.post('http://localhost:8000/products', { title, price, description })

        const response = await productService.addNewProduct({ title, price, description })

        if (response.status === 201) {

            onAddNewProd(response.data)
            setProducts({ title: '', price: 0, description: '' })

        }


    }

    return (
        <div><h2>Add a new Product</h2>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" value={title} onChange={(e) => { setProducts({ ...products, title: e.target.value }) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e) => { setProducts({ ...products, price: +e.target.value }) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3} value={description} onChange={(e) => { setProducts({ ...products, description: e.target.value }) }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form></div>
    )
}
