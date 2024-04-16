import Product from '../../types/product'
import http from '../axios'

const getProducts = () => {
    return http.get('/products')
}

const addNewProduct = (data: Product) => {
    return http.post('/products', data)
}

export default {
    getProducts,
    addNewProduct
}