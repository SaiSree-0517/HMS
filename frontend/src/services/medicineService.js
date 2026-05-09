import API from "../api/axios";

export const getMedicines = () =>
  API.get("/medicines");

export const createMedicine = (data) =>
  API.post("/medicines", data);