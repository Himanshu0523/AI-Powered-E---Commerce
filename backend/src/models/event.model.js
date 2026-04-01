const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" , 
            required: true,
            index: true
        } ,

        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Product"
        } ,

        event_type: {
            type: String,
            required: true,
            enum: [
                "product_view" , 
                "add_to_cart" ,
                "remove_from_cart",
                "purchase",
                "search"
            ]
        },

        metadata: {
            type: Object
        },

        timestamp: {
            type: Date,
            default: Date.now,
            index: true
        }
    },{
        versionKey: false
    }
);

module.exports = mongoose.model("Event" , eventSchema);