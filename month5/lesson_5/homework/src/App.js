import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import PostPages from "./components/postsPages/PostPages";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from "./components/createPost/CreatePost";
import PetsPage from "./components/petsPage/petsPage";

// import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
      <div className={`App`}>
          {/*<MainPage/>*/}
          {/*<PostPages/>*/}
          {/*<CreatePost/>*/}
          <PetsPage />
      </div>

  );
}

export default App;
