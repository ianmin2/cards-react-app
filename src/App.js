import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import ModesList from './components/ModesList';
import StatusItemList from './components/StatusItemList';
function App() {
  return (
    <>
    <Menu></Menu>
    <hr />
    <ModesList></ModesList>
    <hr />
    <StatusItemList></StatusItemList>
    </>
    
  );
}

export default App;
