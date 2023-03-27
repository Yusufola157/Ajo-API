import mongoose from "mongoose"
import { UserData } from "../AllInterface/Allinterface"

interface MainData extends UserData,mongoose.Document{}
const UserSchema = new mongoose.Schema<UserData>({
    name:{
        type:String,
        required:true,
    }, 
    amount:{
        type:Number,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    accountNumber:{
        type:Number,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default : false,
        // required:true,
    },
    verified:{
        type:Boolean,
        // required:true,
    },
    Message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"messages"
        }
    ],
    wallet:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"wallet"
        }
    ],
    history:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"histories"
        }
    ],
    backToSchool:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"backtoschool"
        }
    ],
})
export default mongoose.model<MainData>("user",UserSchema)