import applicationNewInfo from "../models/applicationNew";

class applicationNewController {
  static async createApplication(req, res) {
    const applications = await applicationNewInfo.create(req.body);
    if (!applications) {
      return res.status(404).json({ error: "applications not created" });
    }
    return res
      .status(200)
      .json({ data: "applications created successfully", data: applications });
  }

  static async getApplications(req, res) {
    const allApplications = await applicationNewInfo.find();
    if (!allApplications) {
      return res
        .status(404)
        .json({ error: "not able to retrieve applications" });
    }
    return res
      .status(200)
      .json({ data: "applications found successfully", data: allApplications });
  }

  static async getOneApplication(req, res) {
    const application = await applicationNewInfo.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: "application not found" });
    }
    return res
      .status(200)
      .json({ message: "application found", data: application });
  }
  static async updateOneApplication(req, res) {
    const application = await applicationNewInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!application) {
      return res.status(404).json({ error: "application update failed" });
    }
    return res
      .status(200)
      .json({ message: "application updated successfully", data: application });
  }
  static async deleteApplication(req, res) {
    const deletedApplication = await applicationNewInfo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedApplication) {
      return res.status(404).json({ error: "application not deleted " });
    }
    return res.status(200).json({
      message: "application deleted successfully",
      data: deletedApplication,
    });
  }
  static async getApplicationInProgram(req, res) {
    const application = await applicationNewInfo.find({
      programName: req.params.programName,
    });
    if (application.length > 0) {
      res.status(200).json({ application, size: application.length });
    } else {
      res.status(400).json("no student in such program");
    }
  }
  static async getApplicationInProgramTime(req, res) {
    const applicationClass = await applicationNewInfo.find({
      programTime: req.params.programTime,
    });
    if (applicationClass.length > 0) {
      res.status(200).json({ applicationClass, size: applicationClass.length });
    } else {
      res.status(400).json("no student in such class");
    }
  }
}

export default applicationNewController;
