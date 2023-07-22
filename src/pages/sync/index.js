// eslint-disable-next-line no-unused-vars
import StatusItemList from '../../components/StatusItemList';

const SyncPage = ({ scanningMode }) => {
  return (
    <>
      <StatusItemList></StatusItemList>
      <hr />
      <ul className="list-group">
        <li className="list-group-item d-grid gap-2">
          <button button type="button" className="btn btn-danger">
            <i className="me-2 bi bi-file-earmark-arrow-up"></i> Upload Current
            Records
          </button>
        </li>
      </ul>
    </>
  );
};

export default SyncPage;
