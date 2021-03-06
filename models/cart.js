const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : true
    },
    buyerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Profile',
        require: true
    },
    sellerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Profile',
        require: true
    },
    price : {
        type : Number
    },
    qty : {
        type : Number,
        required : true
    },
    isApproved : {
        type : Boolean,
        default : false
    },
    daysToTransaction : {
        type : Number
    },
    isCanceled : {
        type : Boolean,
        default : false
    },
    finalDate : {
        type : String,
    },
    isFinish : {
        type : Boolean,
        default : false
    },
    isClose : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model("Cart",cartSchema);

/**
    
    // fale post Id

    {
        "postId" : "628a85e502d8bd0016651328",
        "buyerId" : "628a847702d8bd0016651327",
        "sellerId" : "628b1e0aed7d940016506aa6",
        "price" : 100,
        "qty" : 100
    }

 */