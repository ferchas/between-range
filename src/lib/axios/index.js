import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const dislayResponse = process.env.REACT_APP_DISLAY_RESPONSE_API;
const enableApiMock = process.env.REACT_APP_USE_MOCKED_API;

export const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

export const axiosInstance = enableApiMock === 'true' ? axiosMockInstance : axiosLiveInstance;

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, {
  delayResponse: parseInt(dislayResponse) || 0,
});

export const setAuthorizationJwt = ({ jwt, type }) => {
  axiosInstance.defaults.headers.common['Authorization'] = `${type} ${jwt}`;
};

// Add a request interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  (error) => {
    // if status is 401 redirect login

    return Promise.reject(error);
  },
);
