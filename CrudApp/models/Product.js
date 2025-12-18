const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    nom:{type:String,required:true},
    prix:{type:Number,required:true},
    image:{type:String}
});

module.exports=mongoose.model('Product',productSchema);