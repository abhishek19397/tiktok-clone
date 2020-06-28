import firebase from "firebase";
import db from "../config/firebase";
import * as Random from "expo-random";

export const updateDescription = (text) => {
  return { type: "UPDATE_DESCRIPTION", payload: text };
};

export const updateVideo = (input) => {
  return { type: "UPDATE_VIDEO", payload: input };
};

export const uploadVideo = () => {
  return async (dispatch, getState) => {
    try {
      const { video, user } = getState();
      const id = await Random.getRandomBytesAsync(16);
      const upload = {
        videoUrl: video.videoUrl,
        videoDescription: video.description,
        uid: user.uid,
        username: user.username,
      };

      const ref = await db.collection("videos").doc();
      upload.id = ref.id;
      ref.set(upload);
    } catch (e) {
      alert(e);
    }
  };
};

export const getVideos = () => {
  return async (dispatch, getState) => {
    try {
      const videos = await db.collection("videos").get();

      let array = [];
      videos.forEach((video) => {
        array.push(video.data());
      });

      dispatch({ type: "GET_VIDEOS", payload: array });
    } catch (e) {
      alert(e);
    }
  };
};
