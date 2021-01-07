export const authEndpoint = "https://accounts.spotify.com/authorize";

//const redirectUri = "http://localhost:3000/";
const redirectUri = "http://spotify-clone-react-mp.netlify.app";

//const clientId = "133100dd231f4e8596d26af6ab8c3979";
const clientId = "b6e45a0f200e4965860428dc1454e04e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
