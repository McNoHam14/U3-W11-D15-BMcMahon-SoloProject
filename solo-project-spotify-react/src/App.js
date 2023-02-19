import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarComponent from "./components/SideBarComponent";
import HeaderComponent from "./components/HeaderComponent";
import SearchComponent from "./components/SearchComponent";
import PlayerComponent from "./components/PlayerComponent";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container-fluid d-flex page-wrapper mt-5">
        <SideBarComponent />
        <MainComponent />
        {/* <SearchComponent /> */}
        <PlayerComponent />
        {/* <Routes>
        <Route path="/search" element={<SearchComponent />} />
      </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
