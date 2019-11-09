import { firestore } from '../helpers/firebase';

class Videos {
  static getAllVideos() {
    firestore.collection('videos').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
  });
  }
}

export default Videos;