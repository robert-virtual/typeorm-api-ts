import { Router } from "express";
import { Product } from "../entity/Product";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, description, price, quantity } = req.body;

  if (!name || !description || !price || !quantity) {
    return res.status(400).json({
      error: "faltan datos importates para crear el registro del producto",
    });
  }

  try {
    const product = await Product.create({
    description,
    name,
    price,
    quantity,
    }).save();

    res.status(201).json({
        msg:"producto creado",
        product
    })
      
  } catch (error) {
    res.status(500).json({
    error:error.message
    })
  }



});

export default router;
