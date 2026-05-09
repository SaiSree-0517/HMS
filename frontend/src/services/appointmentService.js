import API from "../api/axios";

export const getAppointments = () =>
  API.get("/appointments");

export const createAppointment = (data) =>
  API.post("/appointments", data);