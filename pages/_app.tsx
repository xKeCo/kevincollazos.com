// Next
import type { AppProps } from 'next/app';

// Local Components
import { Layout } from '../components';

// Styles
import '../styles/globals.css';

// Medium Styles
import '../styles/mediumZoomStyles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
