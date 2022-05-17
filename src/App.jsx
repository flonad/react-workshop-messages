import logo from './logo.svg';
import './App.css';
import { MessageBox } from "./components";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Workshop MessageBox
        </p>
      </header>
      <div className="App-body">
        <MessageBox />
      </div>
    </div>
  );
}

export default App;
