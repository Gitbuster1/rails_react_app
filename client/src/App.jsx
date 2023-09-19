import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
      <Router>
          <div className="app">
              <h1>React App</h1>
              <p>Test</p>
              <NavBar />
              <AppRoutes />
          </div>
      </Router>
  );
}

export default App
