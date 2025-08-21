import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { UserProvider } from '../contexts/UserContext';
import { TenantProvider } from '../contexts/TenantContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <TenantProvider>
          <Component {...pageProps} />
        </TenantProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;