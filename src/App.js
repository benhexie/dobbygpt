import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardMain from './pages/Dashboard/DashboardMain';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Dashboard />}>
                <Route index element={<DashboardMain />} />
              </Route>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
