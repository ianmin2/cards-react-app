// eslint-disable-next-line no-unused-vars
import StatusItemList from '../../components/StatusItemList';

const SyncPage = ({ scanningMode, showAlert }) => {
  const handleClick = () => {
    // showAlert("Warning", "Not implemented.", () => {
    //   console.log("OK button clicked");
    // }, "Confirm");
    showAlert(
      "<font color='blue'><b><center>UPDATE RECEIVED!</center></b></font>",
      "<center style='color:green;'>The List of people allowed in the cafeteria has just been updated</center>",
      window._doNothing,
      'CONTINUE'
    );
  };
  return (
    <>
      <StatusItemList></StatusItemList>
      <hr />
      <ul className="list-group">
        <li className="list-group-item d-grid gap-2">
          <button
            onClick={handleClick}
            button
            type="button"
            className="btn btn-danger">
            <i className="me-2 bi bi-file-earmark-arrow-up"></i> Upload Current
            Records
          </button>
        </li>
      </ul>
    </>
  );
};

export default SyncPage;
