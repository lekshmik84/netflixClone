import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action, originals} from './url';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} tittle='NetFlix Originals'/>
      <RowPost url={action} tittle='Action' isSmall/>
    </div>
  );
}

export default App;
