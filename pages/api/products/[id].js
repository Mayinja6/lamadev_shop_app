import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function productIdHandler(req, res) {
  dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}