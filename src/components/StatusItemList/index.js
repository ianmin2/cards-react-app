import { StatusItems as statusItems } from "../../constants/index.ts";
import StatusItem from "../StatusItem";

const StatusItemList = () => {
    return (
        <>
        {
            statusItems.map((cfg, index) => (
                <StatusItem key={index} config={cfg}></StatusItem>
            ))
        }
        <hr />

        <ul className="list-group">
           <li className="list-group-item d-grid gap-2" >
                <button button type="button" className="btn btn-danger">
                    <i className="me-2 bi bi-file-earmark-arrow-up"></i> Upload Current Records
                </button>
            </li> 
        </ul>
        
        </>
    )
};

export default StatusItemList;