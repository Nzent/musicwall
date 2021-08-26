import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
