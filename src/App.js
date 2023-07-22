import './App.css';
import { useEffect } from 'react';
import Modal from 'react-modal';
// eslint-disable-next-line no-unused-vars
import Menu from './components/Menu';
import { useDispatch } from 'react-redux';
import { actions as appActions } from './store/modules/app/reducer';
// eslint-disable-next-line no-unused-vars
import { AlertDialogProvider, useAlertDialog } from './custom/AlertDialog';

Modal.setAppElement('#modals');

function App() {
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

export default App;
