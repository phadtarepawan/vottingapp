import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlankPage from "./pages/BlankPage";
import FullPage from "./pages/FullPage";
import NavBar from "./components/NavBar";
import { Usercontext } from "./components/useContext";

function App() {
  const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  console.log("app", loggedUser);
  return (
    <div className="App">
      <Usercontext.Provider value={loggedUser}>
        <NavBar />
        <Routes>
          <Route path="/*" element={<BlankPage />} />
          <Route path="/secured/*" element={<FullPage />} />
        </Routes>
      </Usercontext.Provider>
    </div>
  );
}

export default App;
