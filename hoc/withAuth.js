import Redirect from "@/components/shared/Redirect";
import { useGetUser } from "@/actions/user";

const withAuth = (Component) => (role) => {
  return props => {
    const { data, loading } = useGetUser();
    if (loading) {
      return <p>loading data....</p>;
    }

    if (!data) {
      return <Redirect ssr to="/api/auth/login" />;
    }
    {
      if(data  && !data[process.env.AUTH0_NAMESPACE + '/roles'].includes(role)){
        return <Redirect ssr to="/api/auth/login" />;
      }
      
      return <Component data={data} loading={loading} {...props} />;
    }
  };
};
export default withAuth;
