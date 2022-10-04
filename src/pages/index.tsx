import type { NextPage } from "next";
import Meta from "../components/common/01 Head/00 Header/00 Meta";
import Menu from "../components/common/01 Head/01 Menu";
import Hero from "../components/common/01 Head/02 Hero";
import Logos from "../components/common/01 Head/04 Logos";
import Tinder from "../components/common/02 Body/06 Tarjetas/Tinder";
import Well from "../components/uncommon/01 Home/00 Index/02 Body/03 Well";
import Footer from "../components/common/03 Footer/25 Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <div className="mx-auto flex flex-col justify-center p-4">
        <Menu />
        <div className="mx-auto justify-center md:hidden">
          <Logos />
        </div>
        <Hero />
        <Tinder />
        <Well />
      </div>
      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
