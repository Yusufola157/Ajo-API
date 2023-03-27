import mongoose from "mongoose"
import { IWalletData } from "../AllInterface/Allinterface"

interface MainData extends IWalletData,mongoose.Document{}
const saveSchema= new mongoose.Schema<IWalletData>({
    balance:{
        type:Number
    },
    credit:{
        type:Number
    },
    debit:{
        type:Number
    },
})
export default mongoose.model<MainData>("savelock",saveSchema)