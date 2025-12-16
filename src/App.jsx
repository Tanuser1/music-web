import './App.css'
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import PlayerControls from './components/PlayerControls/PlayerControls';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <div className="app-container">
      <div className="main-body">
        <Sidebar/>
        <div className="content-wrapper">
          <Header/>
          <MainContent/>
        </div>
      </div>  
      <PlayerControls/>
    </div>
   
  );
}

export default App
