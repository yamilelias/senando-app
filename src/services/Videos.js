import { firestore } from '../helpers/firebase';

class Videos {
  videos = [];

  getAllVideos() {
    return firestore.collection('videos').orderBy('name').get().then((querySnapshot) => {
      if(!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          this.videos.push(doc.data());
        });
      }

      return this.videos;
    });
  }

  searchVideo(param) {
    return this.videos.filter(video => {
      const value = new RegExp(param,"i");
      return video.name.search(value) >= 0; // If value exists
    });
  }
}

export default new Videos();