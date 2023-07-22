import { createContext, useContext, useState } from 'react';

export const AlertDialogContext = createContext();

// @ provider
export const AlertDialogProvider = ({ children }) => {
  const [alertDialog, setAlertDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    callback: null,
    okText: 'OK',
  });

  return (
    <AlertDialogContext.Provider value={{ alertDialog, setAlertDialog }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// @ hook

export const useAlertDialog = () => {
  const { alertDialog, setAlertDialog } = useContext(AlertDialogContext);

  const showAlert = (title, message, callback, okText = 'OK') => {
    setAlertDialog({
      isOpen: true,
      title,
      message,
      callback,
      okText,
    });
  };

  const hideAlert = () => {
    setAlertDialog({
      isOpen: false,
      title: '',
      message: '',
      callback: null,
      okText: 'OK',
    });
  };

  return { alertDialog, showAlert, hideAlert };
};
