const config = require("../config/auth.config");
const db = require("../models");
const Company = db.company;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add = (req, res) => {
  const company = new Company({
    name: req.body.name,
    country: req.body.country,
    website: req.body.country,
    legalNumber: req.body.legalNumber,
  });

  company.save(company)
  res.json({
    message:"created succesfully"
  })
};

exports.update=(req,res)=>{
    const companyId = req.params.id
    const company = new Company({
       
        name: req.body.name,
        country: req.body.country,
        website: req.body.country,
        legalNumber: req.body.legalNumber
      });
    Company.findByIdAndUpdate(companyId,{
        name: req.body.name,
        country: req.body.country,
        website: req.body.website,
        legalNumber: req.body.legalNumber
      }, { new: true }).then((updatedPost)=>{
        return res.json(updatedPost).status(201)
    }).catch((error)=>{
        return res.json(error.message).status(400)
    })
    
} 
exports.getById=(req,res)=>{
    result=db.company.findById(req.params.id).then((result)=>{
        return res.json(result).status(200);
    });
    
}
exports.get=(req,res)=>{
    result=Company.find().sort({createdAt:-1}).then((result)=>{
        return res.json(result).status(200);
    });
    
}
exports.delete=(req,res)=>{
    result=Company.findByIdAndDelete(req.params.id).then((result)=>{
        return res.json({
            message:"Deleted succesfully",
            deletedItem:result
        }).status(200);
    }).catch((err)=>{
        res.status(500).json({
            message:"an error occured during process"
        })
    });
    
}

