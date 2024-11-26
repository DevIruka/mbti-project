import axios from "axios";

const jsonApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const getTestResults = async () => {
  const response = await jsonApi.get();
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await jsonApi.post("/testResults", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
