const Product = require("../models/productModel");

const addProduct = async (productData, res) => {
  try {
    const product = new Product(productData);
    await product.save();
    res.status(201).send({ message: "Product added successfully ", product });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Error creating product", error: err.message });
  }
};

const removeProduct = async (productData, res) => {
  try {
    const product = await Product.findByIdAndDelete(productData);
    if (!product) {
      res.status(404).send({ message: "Product not found", product });
    } else {
      res.send(product);
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error deleting product", error: err.message });
  }
};

module.exports = {
  addProduct,
  removeProduct,
};
