import axios from "axios";

class HttpService {  
  constructor() {
    this.axios = axios.create({
        baseURL: "http://localhost:3001/api/"
    });
  }

  get(resource, options) {
    return this.axios.get(resource, options);
  }

  post(resource, data) {
    return this.axios.post(resource, data);
  }

  put(resource, data) {    
    return this.axios.put(resource, data);
  }
 
  delete(resource, data) {
    return this.axios.delete(resource, data);
  }
}

export default new HttpService();
