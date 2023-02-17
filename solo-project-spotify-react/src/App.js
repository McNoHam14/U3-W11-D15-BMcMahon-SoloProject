import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarComponent from "./components/SideBarComponent";
import HeaderComponent from "./components/HeaderComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBarComponent />
      <HeaderComponent />
      <SearchComponent />
      {/* <Routes>
        <Route path="/search" element={<SearchComponent />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
