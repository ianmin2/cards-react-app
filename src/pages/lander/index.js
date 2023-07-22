import ScanningPage from "../scanning";
import { PAGES } from "../../constants/index.ts";
import RegistrationPage from "../registration";
import ModesPage from "../modes";
import SyncPage from "../sync";
import { useContext } from 'react';
import { appContext } from '../../App';


const LanderPage = () => {


    const {  page:current } = useContext(appContext)


    let renderPage = '404! Lost in a small world.'

    switch (current) {
        case PAGES.REGISTRATION:
            renderPage = (<RegistrationPage></RegistrationPage>)
        break;

        case PAGES.MODES: 
            renderPage = (<ModesPage></ModesPage>);
        break;

        case PAGES.SCANNING: 
            renderPage = (<ScanningPage></ScanningPage>);
        break;

        case PAGES.SYNC:
            renderPage = (<SyncPage></SyncPage>);
        break; 
    
        default:
            renderPage = (<RegistrationPage></RegistrationPage>)
        break;
    }

    return (
        <>
            {renderPage}
        </>
    )
}

export default LanderPage;