import API from "../api/axios";

export const getAll = () =>
  API.get("/patients");

export const createData = (data) =>
  API.post("/patients", data);