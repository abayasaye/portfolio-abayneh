import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  clientId: process.env.AUTH0_CLIENT_ID,
  secret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT,
  baseURL: process.env.BASE_URL,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET
  }
});