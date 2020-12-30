export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  current_track: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAY":
      return {
        ...state,
        playing: true,
      };
    case "SET_PAUSE":
      return {
        ...state,
        playing: false,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discoverList,
      };
    case "SET_CURRENT_PLAYING":
      return {
        ...state,
        current_track: action.current,
      };
    default:
      return state;
  }
};

export default reducer;
