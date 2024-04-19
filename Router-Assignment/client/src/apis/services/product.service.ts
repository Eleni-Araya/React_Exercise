import Product from '../../types/product';
import http from '../axios';

const getAll = () => {
    return http.get('/products');
}

const deleteProductById = (id: number) => {
    return http.delete(`/products/${id}`);
}

const saveProd = (data: Product) => {
    return http.post('/products', data);
}

export default {
    getAll,
    deleteProductById,
    saveProd
}