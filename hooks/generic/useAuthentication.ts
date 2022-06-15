import { routes } from '@constants';
import { Session, Role } from '@interfaces';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { includes } from 'lodash';
const useAuthentication = (session: Session) => {
  const router = useRouter();
  const isAuthenticated = useMemo(
    (): boolean => session && !!session.accessToken,
    [session]
  );
  const isAdmin = useMemo(
    () => session && session.role === Role.Admin,
    [session]
  );
  const isUser = useMemo(
    () => session && session.role === Role.User,
    [session]
  );
  useEffect(() => {
    if (!isAuthenticated && !(routes[router.pathname] || {}).isPublic)
      router.replace('/');
    if (!isAdmin && includes(router.pathname, 'admin')) router.replace('/');
  }, [router, isAuthenticated, isAdmin, isUser]);
  return { isAuthenticated, isAdmin, isUser };
};
export default useAuthentication;
