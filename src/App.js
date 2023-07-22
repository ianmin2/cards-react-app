// import logo from "./logo.svg";
import { useEffect } from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Menu from './components/Menu';
import { useDispatch } from 'react-redux';
import { actions as appActions } from './store/modules/app/reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
    // appActions.actionRequested({
    //   name: "ian",
    // })
    appActions.getSettings({ HIST: window.history });
  }, []);

  return (
    <>
      <Menu></Menu>
    </>
  );
}

export default App;
