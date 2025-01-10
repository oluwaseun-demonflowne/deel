import Everything from "@/components/Everything/Everything";
import Platform from "@/components/Everything/Platform";

export default function Home() {
  return (
    <main className="font-brush">
      <div>
        <Everything />
        <div className="px-20">
        <Platform />
        </div>
      </div>
    </main>
  );
}
