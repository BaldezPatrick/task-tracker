import "@/styles/globals.css";
import Head from "next/head";
import "../../public/i18Next/i18n";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Task Tracker is a simple web application designed to help you remember and manage your daily tasks. You can easily add and delete tasks as you perform them"
        />
        <title>Task Tracker</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
