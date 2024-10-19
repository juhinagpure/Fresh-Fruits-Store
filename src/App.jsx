import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;