import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    email: {
        type : String,
        required : true,
        unique : true
    },
    name: {
        type:String,
        required: true
    },
    rating: {
        type : Number,
        required:true
    },
    comment : {
        type : String,
        required:true
    },
    date: {
        type : Date,
        required : true,
        default : Date.now()

    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    },
    profilePicture : {
        type : String,
        required : true,
        default : "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"

    }

})

const Review=mongoose.model("Review",reviewSchema);

export default Review;