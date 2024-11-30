import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
