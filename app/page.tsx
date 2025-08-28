import SiteDescription from "./lib/components/siteDescription/siteDescription";
import Percentage from "./lib/percentage/percentage";

export default function Home() {
  return (
    <main>
      <div className="p-lg gap-lg flex h-dvh flex-col items-baseline justify-end overflow-hidden bg-linear-165 from-transparent to-neutral-950/15 dark:from-neutral-950/10 dark:to-transparent">
        <SiteDescription />
        <Percentage />
      </div>
    </main>
  );
}
