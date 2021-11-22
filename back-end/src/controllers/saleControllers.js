const saleServices = require('../services/saleService');

const register = async (req, res) => {
  const { customer, sellerId, cartProducts, address } = req.body;
  const response = await saleServices.register(customer, sellerId, cartProducts, address);
  res.status(response.status).json(response.message);
};

const getSales = async (req, res) => {
 // const { id } = req.params;
  const response = await saleServices.getSales();
  res.status(response.status).json(response.message);
};

const getSellerSales = async (req, res) => {
  const { sellerId } = req.body;
  const response = await saleServices.getSellerSales(sellerId);
  res.status(response.status).json(response.message);
};

module.exports = {
  register,
  getSales,
  getSellerSales,
};
