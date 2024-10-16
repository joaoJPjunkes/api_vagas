const Vaga = require('../models/vaga');

exports.criarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.create(req.body);
    res.status(201).json(vaga);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar vaga' });
  }
};

exports.listarVagas = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ attributes: ['titulo'] });
    res.status(200).json(vagas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar vagas' });
  }
};

exports.buscarVagaPorId = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }
    res.status(200).json(vaga);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar vaga' });
  }
};

exports.atualizarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }
    await vaga.update(req.body);
    res.status(200).json(vaga);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar vaga' });
  }
};

exports.deletarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }
    await vaga.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover vaga' });
  }
};

exports.filtrarPorCargo = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
    res.status(200).json(vagas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao filtrar vagas por cargo' });
  }
};

exports.filtrarPorCidade = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
    res.status(200).json(vagas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao filtrar vagas por cidade' });
  }
};
