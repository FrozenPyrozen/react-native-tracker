import axios from 'axios';

export default axios.create({
  // TODO: Change baseURL every 8 hours
  baseURL: 'http://b744de48.ngrok.io',
});
