import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 2cf69ccc2d5dd3c76b56227ad5e47f480c8aca2564adb0ab23f000abd65b278e"
	}
});
