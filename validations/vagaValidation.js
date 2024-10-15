exports.validarVaga = (req, res, next) => {
    const { titulo, descricao, cargo, cidade } = req.body;
  
    if (!titulo || !descricao || !cargo || !cidade) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    }
  
    next();
  };
  