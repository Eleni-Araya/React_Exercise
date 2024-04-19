import React, { ChangeEvent, useState, MouseEvent } from 'react'
import Product from '../../types/product'
import productService from '../../apis/services/product.service';

export default function AddProduct() {

    const [product, setProduct] = useState<Product>({ id: -1, title: '', price: 0, description: '' });
    const [flag, setFlag] = useState(false);
    const { title, price, description } = product;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const submit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await productService.saveProd(product);
        if (response.status === 201) {
            setProduct({ id: -1, title: '', price: 0, description: '' });
            setFlag(true);
        }

    }

    return (
        <div className='mt-5'>

            {flag ? <><h3>Save Successfully </h3><button className='btn btn-success' onClick={() => setFlag(!flag)}>Add one more?</button></> : (
                <>
                    <h2>Add a Product</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input className="form-control" id="title" name='title' value={title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="numbner" className="form-control" id="price" name='price' value={price} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="numbner" className="form-control" id="description" name='description' value={description} onChange={handleInputChange} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </form></>
            )}
        </div>
    )
}