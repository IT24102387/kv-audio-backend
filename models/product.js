import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    key : {
        type : String,
        required : true,
        unique : true,
        

    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required :true,
        default :"uncategorized"

    },
    dimensions : {
        type :String,
        required : true

    },
    description : {
        type : String,
        required : true
    },
    availability :{
        type : Boolean,
        required : true,
        default : true
    },
    image :{
        type :[String],   //multiple image add
        required : true,
        default : ["https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"]
        

    }

})

const Product=mongoose.model("Product",productSchema);

export default Product;