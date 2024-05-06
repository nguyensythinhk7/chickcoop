import './App.css';
import Header from "./components/Header/";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContextProvider } from './provider/AppContext';
import Home from './pages/Home';
import Airdrop from './pages/Airdrop';
import WhitePaper from './pages/WhitePaper';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/whitepaper" element={<WhitePaper />} />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
