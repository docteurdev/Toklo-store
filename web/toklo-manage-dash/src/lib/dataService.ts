import axios from 'axios';
import { baseEndpoint } from './config';
// import { userStorage } from './utilities';

 const API_ENDPOINT =  baseEndpoint;


  function fecthToken(){
   const token =  '' //userStorage("_sendit_user").token
  return token
}

const authHeader = () => ({
  Authorization: `Bearer ${fecthToken()}`,
});



const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${fecthToken()}`,
    'Content-Type': 'application/json',
  },
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}) {
    // console.log("optionalHeader", optionalHeader);
    
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      // headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static delete(path = '', data = {}) {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${fecthToken()}` };

  return requestConfig;
});


client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
    const originalRequest = error.config;

    if (response) {
      if (response.status === 403) {
        // Handle 403 Forbidden error here
        // For example, you might want to redirect to a login page or display an error message
        console.error('Forbidden error. Redirecting to login page or displaying error message.');
        
        // You can also initiate a token refresh or perform any other necessary actions.
        // Example: return refreshToken().then(() => axios(originalRequest));
      } else if (response.status === 500) {
        // Handle 500 Internal Server Error
        console.error('Internal Server Error. Do something here.');
      } else {
        // For other status codes, return the original request
        return Promise.reject(error);
      }
    }

    // If there is no response, reject the error
    return Promise.reject(error);
  }
);export { DataService };
