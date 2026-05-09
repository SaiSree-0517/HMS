import API from "../api/axios";

export const getLabReports = () =>
  API.get("/lab-reports");

export const createLabReport = (data) =>
  API.post("/lab-reports", data);