import "./globals.css";
import Aos from "./components/Aos";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Aos>
      <main>
        {/* <Sidebar/> */}
        <Footer/>
      </main>
    </Aos>
  );
}
