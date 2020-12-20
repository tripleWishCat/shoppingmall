import axios from 'axios';


export default axios.create({
    baseURL: "https://api.iamport.kr",
    timeout: 1000 * 30
  })