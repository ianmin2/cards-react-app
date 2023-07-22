import { useContext } from 'react';
import { appContext } from '../../App';

const ScanningPage = ({config = {lastScanned : {}}}) => {
    
   const {mode: scanningMode}  = useContext(appContext)
    
    return (
        <>

      <ul className="list-group w-90">
        <li className="list-group-item  d-flex justify-content-center">
          <button type="button" className="btn btn-contrast col-10">
            <i className="me-2 bi bi-sd-card"></i> {scanningMode.capitalize()}{' '}
            Mode
          </button>
        </li>
      </ul>
      <br />
      <br />
      <br />

      <table className="table table-sm container">
        <tbody>
          <tr>
            <th scope="row">Cards Scanned:</th>
            <td>
              <code>{config.totalScans || 0}</code>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="card container">
        <div className="card-body">
          <table className="table table-sm">
            <tbody>
              <tr>
                <td>
                  <code>{config.lastScanned.id || 'Awaiting New Scans'}</code>
                </td>
              </tr>

              <tr>
                <td>
                  <code>{config.lastScanned.meta || 'All other data'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScanningPage;
