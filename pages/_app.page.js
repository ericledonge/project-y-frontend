// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

// import "../styles/globals.css";

// import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);

  // return (
  //   // <Layout>
  //   <Component {...pageProps} />
  //   // </Layout>
  // );
}

export default MyApp;
