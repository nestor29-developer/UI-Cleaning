import { Montserrat } from "@next/font/google";
import { Layout } from "components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className={montserrat.className}>
      <Layout />
    </div>
  );
}
