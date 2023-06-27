import { r as redirect } from "../../../chunks/index.js";
import { OAuth2Client } from "google-auth-library";
import { S as SECRET_CLIENT_ID, a as SECRET_CLIENT_SECRET } from "../../../chunks/private.js";
const actions = {
  OAuth2: async () => {
    const redirectURL = "http://localhost:5173/oauth";
    console.log("id", SECRET_CLIENT_ID);
    const oAuth2Client = new OAuth2Client(
      SECRET_CLIENT_ID,
      SECRET_CLIENT_SECRET,
      redirectURL
    );
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.profile  openid ",
      prompt: "consent"
    });
    throw redirect(302, authorizeUrl);
  }
};
export {
  actions
};
