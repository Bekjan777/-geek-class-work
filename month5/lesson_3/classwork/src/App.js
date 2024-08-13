import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";

import Menu from "./components/Menu";
import UserRegisterPage from "./pages/userRegisterPage/userRegisterPage";
// import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<MainPage/>} />
              <Route path="/users" element={<UserRegisterPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
