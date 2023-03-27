import mongoose from "mongoose"
import { IBackToSchool } from "../AllInterface/Allinterface"

interface MainData extends IBackToSchool,mongoose.Document{}
const walletSchema= new mongoose.Schema<IBackToSchool>({
    balance:{
        type:Number
    },
    credit:{
        type:Number
    },
    debit:{
        type:Number
    },
    Target:{
        type:Number
    },
    purpose:{
        type:String
    },
})
export default mongoose.model<MainData>("backtoschool",walletSchema)