const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let StockSchema = new Schema({
    name : {
        type : String
    },
    price:{
        type : Number
    },
    quantity: {
        type : Number
    }
},{ collection : "stocks"

})

module.exports = mongoose.model('Stock', StockSchema);