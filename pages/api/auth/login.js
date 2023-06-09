import auth0 from "@/utils/auth0";
const login = async (req, res) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
};

export default login;
