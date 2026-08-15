import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes.jsx";

import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Router />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
