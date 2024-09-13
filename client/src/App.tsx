import { BrowserRouter as Router , Route, Routes ,} from 'react-router-dom';
import './App.css';
import { Dashboard } from './Pages/DashBoard';
import { Auth } from './Pages/auth';
import { FinancialRecordsProvider } from './context/financial-record-context';

function App() {
   return (
  <Router> 
    <div className = "app-Contanier">
      <Routes>
        <Route path ="/" element = {
          <FinancialRecordsProvider>
            <Dashboard />
        
          </FinancialRecordsProvider>
        }
      />
        <Route path = "/auth" element = {<Auth/>} />
      </Routes>

    </div>

  </Router> 
  );
}

export default App;
