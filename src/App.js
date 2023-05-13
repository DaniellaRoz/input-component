import './App.css';

import NavBar from './containers/NavBar';
import Inputs from './containers/Inputs';

function App() {
  return (
    <div className="App">
      <NavBar id="nav-bar" />
      <Inputs id="inputs" />
    </div>
  );
}

export default App;
