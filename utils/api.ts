import axios, { AxiosError, AxiosResponse } from "axios";
// import cogoToast from "cogo-toast";

const api = axios.create({
	baseURL: "",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		if (error?.response === undefined) {
			return;
		}

		// return cogoToast.success("No internet connection");
		else {
			const status = error?.response?.status;
			if (status && status === 401) {
				localStorage.clear();
				sessionStorage.clear();
				window.location.href = "/login";
				return;
			}
			if (status && status === 403) {
				localStorage.clear();
				sessionStorage.clear();
				window.location.href = "/login";
				return;
			}
		}
		return Promise.reject(error?.response?.data);
	}
);

export default api;
