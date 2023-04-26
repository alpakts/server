const config = require("../config/auth.config");
const db = require("../models");
const Product = db.product;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add = (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    amount: req.body.amount,
    amountUnit: req.body.amountUnit,
    company: db.mongoose.Types.ObjectId(req.body.company),
  });

  product.save(product)
  res.json({
    message:"created succesfully"
  })
};

exports.update=(req,res)=>{
    const productId = req.params.id
 
    Product.findByIdAndUpdate(productId,{
        name: req.body.name,
        category: req.body.category,
        amount: req.body.amount,
        amountUnit: req.body.amountUnit,
        company: db.mongoose.Types.ObjectId(req.body.company),
      }, { new: true }).then((updatedPost)=>{
        return res.json(updatedPost).status(201)
    }).catch((error)=>{
        return res.json(error.message).status(400)
    })
    
} 
exports.get=(req,res)=>{
    result=Product.find().sort({createdAt:-1}).then((result)=>{
        return res.json(result).status(200);
    });
    
}
exports.getById=(req,res)=>{
    result=Product.findById(req.params.id).then((result)=>{
        return res.json(result).status(200);
    });
    
}
exports.delete=(req,res)=>{
    result=Product.findByIdAndDelete(req.params.id).then((result)=>{
        return res.json({
            message:"Deleted Succesfully",
            deletedItem:result
        }).status(200);
    }).catch((err)=>{
        res.status(500).json({
            message:"an error occured during process"
        })
    });
    
}
