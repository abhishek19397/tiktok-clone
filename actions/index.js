import firebase from "firebase";

export const uploadVideo = (videoFile) => {
  return async (dispatch) => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve(xhr.response);
        xhr.responseType = "blob";
        xhr.open("GET", videoFile.uri, true);
        xhr.send(null);
      });
      const uploadTask = await firebase
        .storage()
        .ref()
        .child(videoFile.uri)
        .put(blob, { contentType: "video/mp4" });
      const downloadURL = await uploadTask.ref.getDownloadURL();
      return downloadURL;
    } catch (e) {
      console.error(e);
    }
  };
};
