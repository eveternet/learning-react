import "./App.css";
import { BrowserRouter, Link, Route } from "react-router";
import Home from "./components/home";
import About from "./components/about";
function App() {
    return (
        <>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
