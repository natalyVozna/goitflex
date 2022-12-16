import { Home } from 'components/Home/Home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError } from 'redux/selectors';
import { Layout } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <Layout>{!error && <Home />}</Layout>;
};
