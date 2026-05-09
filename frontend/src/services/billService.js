import API from "../api/axios";

export const getBills = () =>
  API.get("/bills");

export const createBill = (data) =>
  API.post("/bills", data);