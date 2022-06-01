import logo from './logo.svg';
import './App.css';
import NewAccountForm from './NewAccountForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewAccountForm />
      </header>
    </div>
  );
}

export default App;
