import mongoose from "mongoose"
import { IHistory } from "../AllInterface/Allinterface"

interface MainData extends IHistory,mongoose.Document{}
const historySchema= new mongoose.Schema<IHistory>({
    message:{
        type:String,
    },
    transactionRefrence:{
        type:String,
    },
    Date:{
        type:String,
    },
    description:{
        type:String,
    },
})
export default mongoose.model<MainData>("history",historySchema)