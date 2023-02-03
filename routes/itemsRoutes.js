const express = require('express')
const ItemModel = require('../models/itemModel')
const router = express.Router()

router.get('/get-all-items',async(req,res)=>{
  try{
       const items = await ItemModel.find()
       res.send(items);
  }catch(error){
    res.status(400).json(error);
  }
});

router.post('/add-item',async(req,res)=>{
    try{
       const newitem = new ItemModel(req.body)
       await newitem.save()
       res.send('Item added sucessfully')
    }catch(error){
      res.status(400).json(error);
    }
  });

module.exports = router