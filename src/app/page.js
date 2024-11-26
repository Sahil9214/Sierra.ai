/* eslint-disable prettier/prettier */
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import SierraSpeak from "./Components/SierraSpeaks/SierraSpeak";
import MakeAIYourOwn from "./Components/MakeAIYourOwn/MakeAIYourOwn.jsx";
import ResultSpeak from './Components/ResultSpeak/ResultSpeak.jsx'
import SafeAndSecure from "./Components/Navbar/SafeAndSecure/SafeAndSecure";
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header';
/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <div style={{
      background: "rgba(255,255,255,1)"
    }}>

      <Navbar />
      <Landing />
      <SierraSpeak />
      <MakeAIYourOwn />
      <SafeAndSecure />
      <ResultSpeak />
      <Footer />
    </div>
  );
}
