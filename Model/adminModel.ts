import mongoose from "mongoose"
import { AdminData } from "../AllInterface/Allinterface"

interface MainData extends AdminData,mongoose.Document{}
const UserSchema = new mongoose.Schema<AdminData>({
    name:{
        type:String,
        required:true,
    }, 
    Totalbalance:{
        type:Number,
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
        default : true,
        // required:true,
    },
    Message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"message"
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
export default mongoose.model<MainData>("admin",UserSchema)