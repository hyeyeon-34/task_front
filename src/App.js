import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Completed from './components/Completed';
import Important from './components/Important';
import Proceeding from './components/Proceeding';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Proceeding />} />
          <Route path="/important" element={<Important />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          theme="light"
        />
      </div>
    </HashRouter>
  );
}

export default App;
