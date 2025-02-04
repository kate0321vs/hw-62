import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import './App.css'
import Footer from './components/Footer/Footer.tsx';
import AboutAs from './containers/AboutAs/AboutAs.tsx';

const App = () => {
    return (
        <>
            <header>
                <Toolbar/>
            </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={(<Home/>)}
              />
              <Route
                path="/about-as"
                element={(<AboutAs/>)}
              />
              <Route path="*" element={(<h1>Not page found</h1>)}/>
            </Routes>
          </main>
           <Footer />
        </>
    );
};

export default App;