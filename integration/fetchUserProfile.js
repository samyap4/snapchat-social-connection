/* globals request */
module.exports = function fetchUserProfile(accessToken, context, cb) {
  const axios = require("axios@0.22.0");
  const userInfoEndpoint = "https://kit.snapchat.com/v1/me";
  const headers = { Authorization: `Bearer ${accessToken}` };
  const query = "{me{displayName bitmoji{avatar} externalId}}";

  axios
    .post(userInfoEndpoint, { query }, { headers })
    .then((res) => {
      if (res.status !== 200) {
        return cb(new Error(res.data));
      }

      const userData = res.data.data.me;

      const profile = {
        user_id: userData.externalId,
        nickname: userData.displayName,
        picture: userData.bitmoji ? userData.bitmoji.avatar : null
      };

      cb(null, profile);
    })
    .catch((err) => cb(err));
};
