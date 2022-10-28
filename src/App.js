import logoInstagram from './Sidebar/ImagensSidebar/Instagram_logo.png';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Timeline from './Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Sidebar logo={logoInstagram}/>
      <Timeline />
    </div>
  );
}

export default App;
