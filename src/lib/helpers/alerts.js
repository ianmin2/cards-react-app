import { useAlertDialog } from '../../hooks/useAlertDialogue';

export const Alert = () => {
  const { showAlert } = useAlertDialog();

  // Now you can use showAlert just like customAlert in the previous examples:
  showAlert(
    'UPDATE RECEIVED!',
    'The List of people allowed in the cafeteria has just been updated',
    window._doNothing,
    'CONTINUE'
  );
};

export default Alert;
