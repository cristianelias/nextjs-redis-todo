import '../styles/globals.css'
import MainLayout from "../components/MainLayout/MainLayout";
import UIContextProvider from "../components/contexts/UIContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UIContextProvider>
  );
}

export default MyApp
