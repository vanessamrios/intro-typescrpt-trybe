import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import { validateAmount, validateName } from '../middlewares/products.middleware';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post('/products', validateAmount, validateName, productController.create);

export default router;