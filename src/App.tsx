import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import './App.css'
import Footer from './components/Footer/Footer.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import Portfolio from './containers/Portfolio/Portfolio.tsx';
import Chat from './components/Chat/Chat.tsx';
import Countries from './components/Countries/Countries.tsx';

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
                path="/about-us"
                element={(<AboutUs/>)}
              />
              <Route
                path="/contacts"
                element={(<Contacts/>)}
              />
              <Route
                path="/portfolio"
                element={(<Portfolio/>)}
              >
                <Route path="chat"
                element={(<Chat/>)}/>
                <Route path="countries"
                       element={(<Countries/>)}/>
              </Route>
              <Route path="*" element={(<h1>Not page found</h1>)}/>
            </Routes>
          </main>
           <Footer />
        </>
    );
};

export default App;