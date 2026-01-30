import dynamic from "next/dynamic";

const SeabwHome = dynamic(
  () => import("@/components/seabw-home").then((mod) => mod.SeabwHome),
  { ssr: false }
);

export default function Page() {
  return <SeabwHome />;
}
