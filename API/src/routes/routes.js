const { Router } = require('express');

// importando a controller
const ProductController = require("../controllers/ProductController");

const router = Router();

// rotas com os metodos de CRUD na ordem dos verbos HTTP(get, post,put e delete)
router.get('/products',ProductController.index);
router.get('/products/:id',ProductController.show);
router.post('/products',ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);

module.exports = router;