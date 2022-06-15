import { sendDataApi } from '@utils/server';
import { useDispatch } from 'react-redux';
import {
  addSession,
  removeSession,
  updateSession,
} from '@reduxSession/actions';
import { useRouter } from 'next/router';
const useSession = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const login = async (values) => {
    const response = await sendDataApi(values, '/api/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    });
    dispatch(addSession(response));
    router.push('/auth/petList');
  };
  const logout = async () => {
    const response = await sendDataApi({}, '/api/logout', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    });
    dispatch(removeSession());
    router.replace('/');
  };
  const signUp = async (values) => {
    const response = await sendDataApi(values, 'api/signUp', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    });
    console.log('aca estoy', response);
    dispatch(addSession(response));
    router.replace('/auth/petList');
  };
  const refreshToken = async (userId: string) => {
    const response = await sendDataApi({ userId }, '/api/refresh', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
    });
    dispatch(updateSession(response));
  };
  return {
    login,
    logout,
    signUp,
    refreshToken,
  };
};
export default useSession;
