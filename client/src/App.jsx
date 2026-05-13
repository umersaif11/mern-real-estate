import Home from "./pages/Home";

Routesimport { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
};

export default App;
