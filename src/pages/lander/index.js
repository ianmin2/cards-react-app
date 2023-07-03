import ScanningPage from "../scanning";
import { PAGES } from "../../constants/index.ts";
import RegistrationPage from "../registration";
import ModesPage from "../modes";
import SyncPage from "../sync";


const LanderPage = ({activePage, scanningMode, setScanningMode}) => {

    // const [renderPage, setRenderPage] = useState()



    let renderPage = '404! Lost in a small world.'

    switch (activePage) {
        case PAGES.REGISTRATION:
            renderPage = (<RegistrationPage></RegistrationPage>)
        break;

        case PAGES.MODES: 
            renderPage = (<ModesPage 
                            scanningMode={scanningMode} 
                            setScanningMode={setScanningMode}
                        ></ModesPage>);
        break;

        case PAGES.SCANNING: 
            renderPage = (<ScanningPage 
                                scanningMode={scanningMode}
                        ></ScanningPage>);
        break;

        case PAGES.SYNC:
            renderPage = (<SyncPage 
                            scanningMode={scanningMode}
                        ></SyncPage>);
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