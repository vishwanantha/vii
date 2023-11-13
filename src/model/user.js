import mongoose from "./index.js";

const userSchema=new mongoose.Schema({
    username:{type:String,required:[true,'username is required']},
  
    email:{type:String,required:[true,'email is requires']},
    password:{type:String,required:[true,'should be enter password']},
    token:{type:String}
},{
    versionKey:false
})

const userModel=mongoose.model('users',userSchema)

export default userModel