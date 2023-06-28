import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "slate-simple-editor/dist/index.css"
import "../styles/main.scss";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
