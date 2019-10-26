import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCW2qi-xuRe9nRRRI_Cx6b6lMPtLCbAKhc';

class Youtube {
  static search(params = {}, thenCallback, catchCallback) {
    axios.get(`${BASE_URL}/search`, { params: {...params, key: API_KEY} })
      .then(thenCallback)
      .catch(catchCallback);
  }
}

export default Youtube;