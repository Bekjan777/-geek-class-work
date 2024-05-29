import Header from "./components/jsx/header/header.jsx";
import Footer from "./components/jsx/footer/footer.jsx";
import Modal from "./components/jsx/modal.jsx";
import PageMain from "./components/jsx/mainPage.jsx";
import Lessons from "./components/lessons.jsx";
import Cards from "./components/cards.jsx";
import Homeworks from "./components/homeworks.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.css'
import './index.css'
import './style.css'
import './components/css/cards.css'
import './components/css/lessons.css'
// import './components/css/monster.css'
import './components/css/home_works.css'

export default function App() {
    return (
        <>
            <Router>
                <div className="wrapper">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<PageMain />} />
                        <Route path="/homeworks" element={<Homeworks />} />
                        <Route path="/lessons" element={<Lessons />} />
                        <Route path="/cards" element={<Cards />} />
                        {/*<Route path="http://t.me/nurdinbuy16" element={<PageMain />} />*/}
                    </Routes>
                    <Footer />
                    <Modal />
                </div>
            </Router>
        </>
    );
}
