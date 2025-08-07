import axios from "axios";

const BASE_URL =  import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  timeout: 5000,
  headers: {
   // Authorization: `Bearer ${GITHUB_TOKEN}`, // To be used if authentication is needed
    "Content-Type": "application/json",
  },
});

// Retry logic and rate limit handling
axiosInstance.interceptors.response.use(
  (response) => {
    let remainingRequests = response.headers['x-ratelimit-remaining'];
    if(remainingRequests === '0') {
      const resetTime = response.headers['x-ratelimit-reset'];
      const date = new Date(resetTime * 1000);
      console.warn(`Rate limit exceeded. Try again at: ${date}`);
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 403) {
      const resetTime = error.response.headers['x-ratelimit-reset'];
      const date = new Date(resetTime * 1000);
      console.warn(`Rate limit exceeded. Try again at: ${date}`);
    }

    const config = error.config;
    if (!config || config.__retry) return Promise.reject(error);

    config.__retry = true;
    return new Promise((resolve) =>
      setTimeout(() => resolve(axiosInstance(config)), 1000)
    );
  }
);
export const fetchTrendingRepos = async (createdDate, page = 1) => {
  try{
  const response = await axiosInstance.get("/search/repositories", {
    params: {
      q: `created:>${createdDate}`,
      sort: "stars",
      order: "desc",
      page: page,
    },
  });
  return response.data;
} catch (error) {
  throw new Error(`Failed to fetch trending repositories: ${error.message}`);
  }
};