/* globals request */
module.exports = function fetchUserProfile(accessToken, context, cb) {
  const axios = require('axios@0.22.0');
  const userInfoEndpoint = 'https://kit.snapchat.com/v1/me';
  const headers = { 'Authorization': 'Bearer ' + accessToken };
  const query = "{me{displayName bitmoji{avatar} externalId}}";

  axios
    .post(userInfoEndpoint, { query }, { headers })
    .then(res => {
      if (res.status !== 200) {
        return cb(new Error(res.data));
      }
	  
      const user_data = res.data.data.me;
    
      const profile = {
        user_id: user_data.externalId,
        nickname: user_data.displayName,
        picture: user_data.bitmoji.avatar
      };
      
      cb(null, profile);
    })
    .catch(err => cb(err));
};
