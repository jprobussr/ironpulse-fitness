import Hero from "./components/Hero.jsx";
import Memberships from "./components/Memberships/Memberships.jsx";

import Navbar2 from "./components/Navbar2.jsx";

const App = () => {
  return (
    <>
      
      <Navbar2 />
      <main>
        <Hero />
        <Memberships />
      </main>
    </>
  );
};

export default App;
