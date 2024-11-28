/* eslint-disable prettier/prettier */
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import SierraSpeak from "./Components/SierraSpeaks/SierraSpeak";
import MakeAIYourOwn from "./Components/MakeAIYourOwn/MakeAIYourOwn.jsx";
import ResultSpeak from './Components/ResultSpeak/ResultSpeak.jsx'
import SafeAndSecure from "./Components/SafeAndSecure/SafeAndSecure";
import Footer from './Components/Footer/Footer.jsx';


/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <div style={{
      background: "rgba(255,255,255,1)",
    }}>
      <a class="body-s pointer-events-none absolute -top-8 left-[50%] z-30 -translate-x-[50%] rounded-full border-2 border-yellow bg-white px-12 py-3 text-yellow opacity-0 outline-none transition-[top] duration-200 focus:pointer-events-auto focus-visible:top-3 focus-visible:opacity-100 theme-tech:bg-black theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-2 lg:focus-visible:top-6" href="#main">Skip to main content</a>
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
