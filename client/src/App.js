import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <BrowserRouter>
        <Navbar />
        <main className="mt-8 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <footer>footer</footer>
    </div>
  );
}

export default App;
