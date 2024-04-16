import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../types/product'

type Props = {
    products: Product[]
}
export default function ProductList(props: Props) {
    const { products } = props

    return (
        <div>
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                    </tr>
                </thead>



                <tbody>
                    {products.map(prod =>

                        <tr key={prod.id} >
                            <th scope="row">{prod.id}</th>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.description}</td>
                        </tr>
                    )}


                </tbody>
            </table>
        </div>
    )
}
