import express from "express";
import applicationNewController from "../controller/applicationsNewController";

const applicationsRoute = express.Router();

applicationsRoute.post("/create", applicationNewController.createApplication);
applicationsRoute.get("/all", applicationNewController.getApplications);
applicationsRoute.get("/get/:id", applicationNewController.getOneApplication);
applicationsRoute.get(
  "/applicant/:programName",
  applicationNewController.getApplicationInProgram
);
applicationsRoute.get(
  "/:programTime",
  applicationNewController.getApplicationInProgramTime
);
applicationsRoute.patch(
  "/update/:id",
  applicationNewController.updateOneApplication
);
applicationsRoute.delete(
  "/delete/:id",
  //   authorize("admin"),
  applicationNewController.deleteApplication
);
export default applicationsRoute;
