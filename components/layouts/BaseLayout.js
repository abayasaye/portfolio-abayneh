import Header from "../shared/Header";
import { ToastContainer } from 'react-toastify';

const BaseLayout = (props) => {
  const { className, navClass='with-bg', children, user, loading } = props;
  return (
    <div className="layout-container">
      <Header className={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <ToastContainer/>
    </div>
  );
};

export default BaseLayout;
