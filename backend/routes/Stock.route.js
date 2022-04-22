let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    module.exports = router;

let stockSchema = require('../models/Stock')

router.route('/create-stock').post((req, res , next) => {
    stockSchema.create(req.body,(error , data) => {
        if (error){
            return next(error);
        }else {
            console.log(data);
            res.json(data);
        }
    })
})

router.route('/').get((req , res ) => {
    stockSchema.find((error,data) => {
        if(error){
            return next(error);
        }else {
            res.json(data);
        }
    })
})

router.route('/edit-stock/:id').get((req , res) => {
    stockSchema.findById(req.params.id , (error,data) => {
        if (error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

router.route('/update-stock/:id').put((req,res,next) => {
    stockSchema.findByIdAndUpdate(req.params.id, {
        $set : req.body
    },(error, data) => {
        if (error){
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log('Stock updated successfully')      
        }
    })
})

router.route('/delete-stock/:id').delete((req,res,next) => {
    stockSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error);
        }else{
           res.status(200).json({
               msg: data
           })
        }
    })
})