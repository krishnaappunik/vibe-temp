import logo from './logo.svg';
import './App.css';

function LogPanel() {
  return (
    <div className="Log-panel">
      <p>Log Panel</p>
    </div>
  );
}

function UserForm() {
  return (
    <div className="User-form-panel">
      <p>User Form</p>
    </div>
  );
}

function SidePanelContainer({ children, title, className }) {
  return (
    <div className={`Side-panel ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Container">
          <SidePanelContainer title="Log Panel" className="Log-panel-container">
            <LogPanel />
          </SidePanelContainer>
          <SidePanelContainer title="User Form" className="User-form-container">
            <UserForm />
          </SidePanelContainer>
        </div>
      </div>
    </div>
  );
}

export default App;