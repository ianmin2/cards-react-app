import ScanningPage from "../scanning";
import { PAGES } from "../../constants/index.ts";
import RegistrationPage from "../registration";
import ModesPage from "../modes";
import SyncPage from "../sync";


const LanderPage = ({activePage, scanningMode, setScanningMode, showAlert}) => {

    // const [renderPage, setRenderPage] = useState()



    let renderPage = '404! Lost in a small world.'

    switch (activePage) {
        case PAGES.REGISTRATION:
            renderPage = (<RegistrationPage showAlert={showAlert}></RegistrationPage>)
        break;

        case PAGES.MODES: 
            renderPage = (<ModesPage 
                            scanningMode={scanningMode} 
                            setScanningMode={setScanningMode}
                            showAlert={showAlert}
                        ></ModesPage>);
        break;

        case PAGES.SCANNING: 
            renderPage = (<ScanningPage 
                                scanningMode={scanningMode}
                                showAlert={showAlert}
                        ></ScanningPage>);
        break;

        case PAGES.SYNC:
            renderPage = (<SyncPage 
                            scanningMode={scanningMode}
                            showAlert={showAlert}
                        ></SyncPage>);
        break; 
    
        default:
            renderPage = (<RegistrationPage  
                            showAlert={showAlert}
                        ></RegistrationPage>)
        break;
    }

    return (
        <>
            {renderPage}
        </>
    )
}

export default LanderPage;
