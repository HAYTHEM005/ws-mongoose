const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const restaurantSchema = new Schema({
    name: {type:String,required:true},
    price:{type:Number,required:true},
    available:{type:Boolean,default:true}
})


const RestaurantDB = model('Restaurant',restaurantSchema)


module.exports= RestaurantDB;