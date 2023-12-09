import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import GuestLayout from "./backend/layouts/auth/guest";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/auth/:action?" element={<GuestLayout />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
