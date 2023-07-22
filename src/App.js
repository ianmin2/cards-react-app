import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Modal from 'react-modal';
// eslint-disable-next-line no-unused-vars
import Menu from './components/Menu';
import AppStorage from './lib/helpers/appStorage.ts';
import { STORAGE_KEYS } from './constants/index.ts';
import { actions as appActions } from './store/modules/app/reducer';

// eslint-disable-next-line no-unused-vars
import LanderPage from './pages/lander';
// eslint-disable-next-line no-unused-vars
import { AlertDialogProvider, useAlertDialog } from './custom/AlertDialog';

Modal.setAppElement('#modals');

const appContext = React.createContext({
  items: [],
  page: '',
  navigate: () => {},
  modes: [],
  mode: '',
  switchMode: () => {},
});

function App() {
  const defaultMenu = AppStorage.get(STORAGE_KEYS.MENU_ITEMS);
  const defaultPage = AppStorage.get(STORAGE_KEYS.CURRENT_PAGE);
  const defaultModes = AppStorage.get(STORAGE_KEYS.MODE_ITEMS);
  const defaultMode = AppStorage.get(STORAGE_KEYS.SCANNING_MODE);
  // const { showAlert } = useAlertDialog();

  const [ctx, setCtx] = useState({
    items: defaultMenu,
    page: defaultPage,
    navigate: (newPage) => goToPage({ activePage: newPage }),
    modes: defaultModes,
    mode: defaultMode,
    switchMode: (newMode) => goToPage({ activeMode: newMode }),
    alert: () => {} // showAlert,
  });

  const goToPage = useCallback(({ activePage, activeMode }) => {
    //  const currMode = activePage ? 'page update' : activeMode ? ' scan update' : 'unknown';
    //   console.log(`called multiplexer on ${currMode} mode.`, {activeMode, activePage, appContext})
    if (activePage) {
      AppStorage.set(STORAGE_KEYS.CURRENT_PAGE, activePage);
    }
    if (activeMode) {
      AppStorage.set(STORAGE_KEYS.SCANNING_MODE, activeMode);
    }
    setCtx({
      items: defaultMenu,
      page: activePage || AppStorage.get(STORAGE_KEYS.CURRENT_PAGE),
      navigate: (newPage) => goToPage({ activePage: newPage }),
      modes: defaultModes,
      mode: activeMode || AppStorage.get(STORAGE_KEYS.SCANNING_MODE),
      switchMode: (newMode) =>
        goToPage({
          activeMode: newMode,
        }),
      alert: () => {} // showAlert,
    });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.getSettings());

    // appActions.actionRequested({
    //   name: "ian",
    // });
  }, []);

  return (
    <appContext.Provider value={ctx}>
      <AlertDialogProvider>
            <WrappedMenu />
            <AlertDialog />
      </AlertDialogProvider>
    </appContext.Provider>
  );
}

// eslint-disable-next-line no-unused-vars
function WrappedMenu() {
  const { showAlert } = useAlertDialog();
  return <>
    <Menu showAlert={showAlert} />;
    <LanderPage />
  </>;
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
function AlertDialog() {
  const { alertDialog, hideAlert } = useAlertDialog();

  return (
    <Modal
      isOpen={alertDialog.isOpen}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      onRequestClose={hideAlert}
      contentLabel="SmartCards">
      <div dangerouslySetInnerHTML={{ __html: alertDialog.title }}></div>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: alertDialog.message }}></div>
      <hr />

      <button
        className="btn btn-primary col-12"
        onClick={() => {
          hideAlert();
          if (alertDialog.callback) {
            alertDialog.callback();
          }
        }}>
        {alertDialog.okText}
      </button>
    </Modal>
  );
}

export { appContext };
export default App;
