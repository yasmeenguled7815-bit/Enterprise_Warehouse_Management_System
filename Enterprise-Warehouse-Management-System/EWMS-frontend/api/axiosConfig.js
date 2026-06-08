//src/api/axiosConfig.js

import axios from "axios";

const api=axios.create({baseURL:"http://localhost:8080/api",});

//add jwt token automatically

api.interceptors.requests.use((config)=>{
	const token=localStorage.getItem("token");
	
	if(token){
		config.headers.Authorization='Bearer${token}';
	}
	return config;
});
export default api;
