
import React, { useCallback, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import Modal from 'react-modal';
// eslint-disable-next-line no-unused-vars
import Menu from './components/Menu';
import AppStorage from './lib/helpers/appStorage.ts';
import { STORAGE_KEYS } from './constants/index.ts';
import LanderPage from './pages/lander';

const appContext = React.createContext({
  items: [] ,
  page: '',
  navigate: () =>{},
  modes: [],
  mode: '',
  switchMode: () => {}
})


function App() {

  const defaultMenu = AppStorage.get(STORAGE_KEYS.MENU_ITEMS);
  const defaultPage = AppStorage.get(STORAGE_KEYS.CURRENT_PAGE);
  const defaultModes = AppStorage.get(STORAGE_KEYS.MODE_ITEMS);
  const defaultMode = AppStorage.get(STORAGE_KEYS.SCANNING_MODE);

  const [ctx, setCtx] = useState ( { 
    items: defaultMenu,
    page: defaultPage,
    navigate: (newPage) => goToPage({activePage: newPage}),
    modes: defaultModes,
    mode: defaultMode,
    switchMode: (newMode) => goToPage({activeMode: newMode })
   });
 
  const goToPage = useCallback(({ activePage, activeMode }) =>{
  //  const currMode = activePage ? 'page update' : activeMode ? ' scan update' : 'unknown';
  //   console.log(`called multiplexer on ${currMode} mode.`, {activeMode, activePage, appContext})
    if(activePage){ AppStorage.set(STORAGE_KEYS.CURRENT_PAGE, activePage)}
   if(activeMode) { AppStorage.set(STORAGE_KEYS.SCANNING_MODE, activeMode)};
   setCtx({ 
      items: defaultMenu,
      page:  activePage || AppStorage.get(STORAGE_KEYS.CURRENT_PAGE),
      navigate: (newPage) => goToPage({activePage: newPage}),
      modes: defaultModes,
      mode: activeMode || AppStorage.get(STORAGE_KEYS.SCANNING_MODE),
      switchMode: (newMode) => goToPage({
        activeMode: 
        newMode
      })
    });
  },[]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.getSettings());

    // appActions.actionRequested({
    //   name: "ian",
    // });
  }, []);

  return (
    <AlertDialogProvider>
      <WrappedMenu />
      <AlertDialog />
    </AlertDialogProvider>
  );
}

// eslint-disable-next-line no-unused-vars
function WrappedMenu() {
  const { showAlert } = useAlertDialog();

  return <Menu showAlert={showAlert} />;
}

// eslint-disable-next-line no-unused-vars
function AlertDialog() {
  const { alertDialog, hideAlert } = useAlertDialog();

  return (
    <appContext.Provider value={ctx} >
      <Menu></Menu>
      <br />
      <LanderPage></LanderPage>
    </appContext.Provider>
    
  );
}

export {appContext}
export default App;
