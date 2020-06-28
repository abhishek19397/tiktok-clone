import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "SIGNUP":
      return action.payload;
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_BIO":
      return { ...state, bio: action.payload };
    default:
      return state;
  }
};

const video = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_VIDEO":
      return { ...state, videoUrl: action.payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "GET_VIDEOS":
      return { ...state, feed: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  video,
});

export default rootReducer;
