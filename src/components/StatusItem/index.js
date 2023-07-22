const StatusItem = ({ config }) => {
  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">{config.label}</h5>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th scope="row">Total:</th>
              <td>
                <code>{config.totalUsers}</code>
              </td>
            </tr>

            <tr>
              <th scope="row">Last fetched:</th>
              <td>
                <code>{config.lastUpdated}</code>
              </td>
            </tr>
          </tbody>
        </table>

        <a href="#" onClick={config.updateAction} className="btn btn-primary">
          <i className="bi bi-journal-arrow-down"></i> Download {config.label}{' '}
          List
        </a>
      </div>
    </div>
  );
};

export default StatusItem;
