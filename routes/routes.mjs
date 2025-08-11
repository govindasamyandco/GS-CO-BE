import express from "express";
import {getAllProducts,  addProduct,
  deleteProduct,
  updateProduct} from "../controllers/productController.mjs";
import { loginAdmin } from "../controllers/adminController.mjs";

const router = express.Router();

router.get("/products", getAllProducts);
router.post('/addproduct', addProduct);        
router.delete('/products/:id', deleteProduct); 
router.put('/products/:id', updateProduct);
router.post('/admin/login', loginAdmin);


export default router;
