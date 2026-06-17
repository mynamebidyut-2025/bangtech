import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Trading from "./pages/Trading";
import Literature from "./pages/Literature";
import Social from "./pages/Social";
import Technical from "./pages/Technical";
import AI from "./pages/AI";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
        }}
      >
        <header
          style={{
            background: "#111827",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1>BangTech</h1>

          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/trading">Trading</Link>
            <Link to="/literature">Literature</Link>
            <Link to="/social">Social</Link>
            <Link to="/technical">Technical</Link>
            <Link to="/ai">AI</Link>
          </nav>
        </header>

        <div style={{ padding: "30px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/social" element={<Social />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/ai" element={<AI />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;