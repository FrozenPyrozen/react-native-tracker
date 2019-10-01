import axios from 'axios';

export default axios.create({
  // TODO: Change baseURL every 8 hours
  baseURL: 'http://bd4e6f5c.ngrok.io',
});
