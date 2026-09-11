import { ofetch } from "ofetch";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1";

const apiClient = ofetch.create({
  baseURL: BASE_URL,
  onRequestError({ error }) {
    throw new Error(
      `Could not connect to the API server at ${BASE_URL}. Please make sure your backend is running.`,
      { cause: error },
    );
  },
});

export default apiClient;
