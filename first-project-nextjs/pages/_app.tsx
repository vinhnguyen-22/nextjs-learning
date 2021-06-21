import "../styles/globals.scss";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="root-app">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
