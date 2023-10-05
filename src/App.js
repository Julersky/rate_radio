import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/rateradio" element={<Layout />}>
        <Route path="/rateradio" element={<Home />} />
        <Route path="a-propos/" element={<About />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
