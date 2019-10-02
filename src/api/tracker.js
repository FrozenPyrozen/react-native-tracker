import axios from 'axios';

export default axios.create({
  // TODO: Change baseURL every 8 hours
  baseURL: 'http://3f981770.ngrok.io',
});
