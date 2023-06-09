import auth0 from "@/utils/auth0";
const me = async (req, res) => {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
};

export default me;
