const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const admins = require('../../database/models/admin');

// google oath function by search on the email coming
// from google by the email inside the database and
// send back the user is admin if it exist and user if not.
const { CLIENT_ID } = process.env;
const client = new OAuth2Client(CLIENT_ID);

const googleLogin = async (req, res, next) => {
  const { tokenId } = req.body;
  const verify = async () => {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload.sub;
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
  };
  // this verfy if you dont come from the web by keys
  verify().catch(console.error);

  // request user details:
  try {
    const idInfo = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenId}`,
    );
    const {
      name, given_name, family_name, picture, email,
    } = idInfo.data;
    try {
      const adminData = await admins.findOne({ email });
      if (adminData) {
        res.status(200).json({
          status: 200,
          admin: true,
          name,
          given_name,
          family_name,
          picture,
          email,
        });
      } else {
        res.status(200).json({
          status: 200,
          admin: false,
          name,
          given_name,
          family_name,
          picture,
          email,
        });
      }
    } catch (e) {
      next();
    }
  } catch (e) {
    res.json({ status: 'failed', message: 'Not authorize' });
  }
};

module.exports = googleLogin;
