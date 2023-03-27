import { Router } from "express";
import { RegisterUser,LoginUser,getallUser,getOneUser,backToSchool,UpdateBackToSchoolAccount,fundWalletFromBank,checkPayment,checkOutToBank} from "../Controller/userController";

const route = Router();


route.route("/postuser").post(RegisterUser);
route.route("/login").post(LoginUser)
route.route("/all").get(getallUser)
route.route("/backtoschool/:id").post(backToSchool)
route.route("/user/:id").get(getOneUser)
route.route("/update/:id").patch(UpdateBackToSchoolAccount)
route.route("/pay/:userId").patch(fundWalletFromBank)
route.route("/pays/:id").patch(checkPayment)
// route.route("/withdraw/:userId/:adminId").patch(withdraw)
route.route("/withdraws/:userId/:adminId").patch(checkOutToBank)
export default route