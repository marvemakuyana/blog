import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleBlog from "./pages/blogs/SingleBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <BrowserRouter>
        <Navbar />
        <main className="mt-8 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blogs/:id" element={<SingleBlog />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
