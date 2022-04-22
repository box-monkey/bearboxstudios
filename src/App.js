import React, { useState } from "react";

import Home from "./components/Home/homeIndex";
import Nav from "./components/Nav/navIndex";
import Contact from "./components/Contact/contactIndex";
import Gallery from "./components/Gallery/galleryIndex";
import Tutorials from "./components/Tutorials/tutIndex";
import Services from "./components/Services/servIndex";
import Footer from "./components/Footer/footerIndex";

function App() {
  const pages = ["home", "gallery", "services", "tutorials", "contact"];
  const [activePage, setActivePage] = useState(pages[0]);

  function navigation() {
    if (activePage === "home") {
      return <Home></Home>;
    } else if (activePage === "gallery") {
      return <Gallery></Gallery>;
    } else if (activePage === "services") {
      return <Services></Services>;
    } else if (activePage === "tutorials") {
      return <Tutorials></Tutorials>;
    } else if (activePage === "contact") {
      return <Contact></Contact>;
    }
  }

  return (
    <div>
      <Nav 
      pages={pages}
      activePage={activePage}
      setActivePage={setActivePage}
      />
      <main>{navigation()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
