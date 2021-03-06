import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import Section5 from "./components/Section5";
import Section3 from "./components/Section3"
import Section4 from "./components/Section4";
import SectionInter from "./components/SectionInter";
import SectionToken from "./components/SectionToken";
import Teams from "./components/Teams";
import Timelines from "./components/Timelines";
import Tokenomics from "./components/Tokenomics";

import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Menus from "./components/Menu";
import "./App.css";
function App() {
  return (
    <div className="App">
     
      <Header  />
      <Section1  />
      
          <Section2/>
           <Section3
           />

           <SectionInter />
           <Section4/>

          <Section5/>
           <Section6/>
           <Section7/>
            <Section8/>
           <Section9/>
      <SectionToken />
      <Teams />
      <Timelines />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
