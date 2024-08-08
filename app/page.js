import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <h1 className=" text-MUN-burntSienna">testing from root</h1>
      <Sidebar/>
      <Footer/>
    </main>
  );
}
