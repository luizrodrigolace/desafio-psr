const Product = require("../models/Product");

const index = async(req,res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json({products});

  }catch(err){
    return res.status(500).json({err});
  }
};

const show = async(req,res) => {
  const {id} = req.params;
  try {
      const product = await Product.findByPk(id);
      return res.status(200).json({product});

  }catch(err){
      return res.status(500).json({err});
  }
};

const create = async(req,res) => {
  try{
        const product = await Product.create(req.body);
        return res.status(201).json({message: "Produto cadastrado com sucesso!", product: product});
        
    }catch(err){
        res.status(500).json({error: err});
    }
};

const update = async(req,res) => {
  const {id} = req.params;
  try {
      const [updated] = await Product.update(req.body, {where: {id: id}});
      if(updated) {
          const product = await Product.findByPk(id);
          return res.status(200).send(product);
      } 
      throw new Error();
  }catch(err){
      return res.status(500).json("Produto não encontrado");
  }
};

const destroy = async(req,res) => {
  const {id} = req.params;
  try {
      const deleted = await Product.destroy({where: {id: id}});
      if(deleted) {
          return res.status(200).json("Produto deletado com sucesso.");
      }
      throw new Error ();
  }catch(err){
      return res.status(500).json("Produto não encontrado.");
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
