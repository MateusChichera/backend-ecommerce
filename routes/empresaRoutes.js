const express = require ('express');
const router = express.Router ();
const empresaController = require ('../controllers/empresaController');



router.post('/criar', empresaController.criarEmpresa);
router.get('/:id', empresaController.getEmpresaById);
router.put('/:id', empresaController.atualizarEmpresa);


module.exports = router;