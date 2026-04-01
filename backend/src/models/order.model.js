const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema(
    {
        product_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Product",
            required: true
        },

        quantity: {
            type: Number,
            required: true,
            min : 1
        },

        price: {
            type: Number,
            required: true,
            min: 1
        },

        price: {
            type: Number,
            required: true
        }
    },{
        _id: false
    }
);

const orderSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            index: true
        },
        items: [orderItemSchema],

        total_price: {
            type: Number,
            required: true
        },

        status: {
            type: String ,
            enum: ["Pending" , "paid" , "shipped" , "delivered" , "cancelled"],
            default: "pending"
        },

        created_at: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);


module.exports = mongoose.model("Order" , orderSchema);