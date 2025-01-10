import Build from "@/components/Confidence/Build";
import Everything from "@/components/Everything/Everything";
import Platform from "@/components/Platform/Platform";
import Reason from "@/components/Reasons/Reason";

export default function Home() {
  return (
    <main className="font-brush">
      <div>
        <Everything />
        <div className="px-20">
          <Platform />
        </div>
        <Build />
        <Reason />
      </div>
    </main>
  );
}
