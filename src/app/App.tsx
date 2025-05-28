import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getIsAuth,
  getIsInit,
  getMe,
  userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const isInit = useSelector(getIsInit);
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) return;
    // @ts-ignore
    dispatch(getMe());
  }, [dispatch, isAuth]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        {isInit && <AppRouter />}
      </div>
    </div>
  );
};

export default App;
