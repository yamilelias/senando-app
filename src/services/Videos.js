import { firestore } from '../helpers/firebase';

class Videos {
  videos = [];

  getAllVideos() {
    firestore.collection('videos').get().then((querySnapshot) => {
      if(!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          this.videos.push(doc.data());
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      }
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