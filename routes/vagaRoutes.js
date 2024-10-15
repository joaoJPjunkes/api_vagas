const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');

router.post('/vagas', vagaController.criarVaga);
router.get('/vagas', vagaController.listarVagas);
router.get('/vagas/:id', vagaController.buscarVagaPorId);
router.put('/vagas/:id', vagaController.atualizarVaga);
router.delete('/vagas/:id', vagaController.deletarVaga);
router.get('/cargo/:cargo', vagaController.filtrarPorCargo);
router.get('/localizacao/:cidade', vagaController.filtrarPorCidade);

module.exports = router;
