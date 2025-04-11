import { getIsInit, userActions } from 'entities/User';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const isInit = useSelector(getIsInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          {isInit && <AppRouter />}
        </div>
      </div>
    </div>
  );
};

export default App;
