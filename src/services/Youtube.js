import axios from 'axios';
import moment from 'moment';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCW2qi-xuRe9nRRRI_Cx6b6lMPtLCbAKhc';
const baseParams = {
  key: API_KEY,
  publishedAfter: moment([2019, 1, 1]).format(),
  order: 'title',
  type: 'video'
};

class Youtube {
  static search(params = {}, thenCallback, catchCallback) {
    axios.get(`${BASE_URL}/search`, { params: {...baseParams, ...params} })
      .then(thenCallback).catch(catchCallback);
  }
}

export default Youtube;