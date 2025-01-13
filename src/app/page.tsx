import Build from "@/components/landingpage/Confidence/Build";
import Everything from "@/components/landingpage/Everything/Everything";
import GetStarted from "@/components/GetStarted";
import Platform from "@/components/landingpage/Platform/Platform";
import Reason from "@/components/landingpage/Reasons/Reason";
import MobileNav from "./(shared)/MobileNav";
import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MobileNav />
      <Everything />
      <div className="px-4 md:px-20">
        <Platform />
      </div>
      <Build />
      <Reason />
      <GetStarted />
      <Footer />
      <Login />
    </main>
  );
}
