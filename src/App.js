import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Menu from './components/Menu';
import { useDispatch } from 'react-redux';
import { actions as appActions } from './store/modules/app/reducer';

import { AlertDialogProvider, useAlertDialog } from './custom/AlertDialog';

// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';
// const _win = new JSDOM('').window;
// const DOMPurify = createDOMPurify(_win);


Modal.setAppElement("#modals");

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
    <AlertDialogProvider>
      <WrappedMenu />
      <AlertDialog />
    </AlertDialogProvider>
  );
}

function WrappedMenu() {
  // use the hook in the provider
  const { alertDialog, showAlert, hideAlert } = useAlertDialog();

  // allow the menu to use the alert
  return <Menu showAlert={showAlert} />;
}

function AlertDialog() {
 // use the hook in the provider
  const { alertDialog, hideAlert } = useAlertDialog();

  return (
    <Modal
      isOpen={alertDialog.isOpen}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      onRequestClose={hideAlert}
      contentLabel='SmartCards'
    >
      <div dangerouslySetInnerHTML={{__html: (alertDialog.title) }} >
      </div>
      <hr />
     
      <div dangerouslySetInnerHTML={{__html: (alertDialog.message) }}></div>
      <hr />

      <button className='btn btn-primary col-12' onClick={() => {
        hideAlert();
        if (alertDialog.callback) {
          alertDialog.callback();
        }
      }}>{alertDialog.okText}</button>
    </Modal>
  );
}

export default App;
