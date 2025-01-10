import Build from "@/components/Confidence/Build";
import Everything from "@/components/Everything/Everything";
import GetStarted from "@/components/GetStarted";
import Platform from "@/components/Platform/Platform";
import Reason from "@/components/Reasons/Reason";

export default function Home() {
  return (
    <main className="font-brush">
        <Everything />
        <div className="px-4 md:px-20">
          <Platform />
        </div>
        <Build />
        <Reason />
        <GetStarted />
    </main>
  );
}
