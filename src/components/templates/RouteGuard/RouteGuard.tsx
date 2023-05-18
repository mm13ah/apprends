import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import jsonwebtoken from 'jsonwebtoken';

type Props = {
  children: ReactNode;
};

export const RouteGuard = ({ children }: Props) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const authCheck = (url: string) => {
    const token = localStorage.getItem('refresh_token');
    const publicPaths = ['/login', '/register'];
    const path = url.split('?')[0];

    if (publicPaths.includes(path)) {
      return setAuthorized(true);
    }

    if (token && token !== 'undefined') {
      const decoded = jsonwebtoken.decode(
        localStorage.getItem('refresh_token') ?? ''
      ) as {
        exp: number;
        sub: string;
      };
      if (Date.now() >= decoded.exp * 1000) {
        setAuthorized(false);
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath },
        });
        return <p>Redirecting...</p>;
      }
      return setAuthorized(false);
    }

    setAuthorized(false);
    router.push({
      pathname: '/login',
      query: { returnUrl: router.asPath },
    });
    return <p>Redirecting...</p>;
  };

  useEffect(() => {
    authCheck(router.asPath);

    router.events.on('routeChangeComplete', authCheck);
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  if (authorized) {
    return <>{children}</>;
  }

  return <p>Redirecting...</p>;
};
