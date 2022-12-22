import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Admin from "./pages/Admin/Admin";
import Page from "./pages/Page/Page";
function App() {
  return (
    <div>
      <Page />
      <Admin />
    </div>
  );
}

export default App;