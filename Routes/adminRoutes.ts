import { Router } from "express";
import {RegisterAdmin,LoginAdmin,getAllHistory} from "../Controller/adminContoller";

const route = Router();


route.route("/reg").post(RegisterAdmin);
route.route("/login").post(LoginAdmin)
route.route("/history").get(getAllHistory)
// route.route("/all").get(getallUser)
// route.route("/backtoschool/:id").post(backToSchool)
// route.route("/update/:walletId").patch(UpdateBackToSchoolAccount)
// route.route("/withdraw/:userId/:adminId").patch(withdraw)
export default route