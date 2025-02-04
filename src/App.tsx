import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import './App.css'
import Footer from './components/Footer/Footer.tsx';
import AboutAs from './containers/AboutAs/AboutAs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';

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
              <Route
                path="/contacts"
                element={(<Contacts/>)}
              />
              <Route path="*" element={(<h1>Not page found</h1>)}/>
            </Routes>
          </main>
           <Footer />
        </>
    );
};

export default App;