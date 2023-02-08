import './App.css';
import Routers from './components/Routers';
import UserContext from './components/UserContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App" dir ="rtl">
      <BrowserRouter>
        <UserContext>
          <Routers />
        </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;