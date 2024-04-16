const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    res.status(200).json(Product.fetchAll());
}

exports.getProductById = (req, res, next) => {
    res.status(200).json(Product.findById(Number(req.params.prodId)));
}

exports.save = (req, res, next) => {
    const prod = req.body;
    const savedProd = new Product(null, prod.title, prod.price, prod.description).save();
    res.status(201).json(savedProd);
}

exports.update = (req, res, next) => {
    const prod = req.body;
    const updatedProd = new Product(Number(req.params.prodId), prod.title, prod.price, prod.description).update();
    res.status(200).json(updatedProd);
}

exports.deleteById = (req, res, next) => {
    Product.deleteById(Number(req.params.prodId));
    res.status(200).end();
}