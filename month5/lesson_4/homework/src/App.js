import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";


// import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
      <div className={`App`}>
          <MainPage/>
      </div>
  );
}

export default App;
