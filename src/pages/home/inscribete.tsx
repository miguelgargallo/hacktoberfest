import type { NextPage } from 'next'

import Menu from '../../components/common/01 Head/06 Menu'
import Info from '../../components/uncommon/01 Home/08 Inscribete/02 Body/04 info/info'
import Logos from "../../components/common/01 Head/04 Logos";
import Footer from '../../components/common/03 Footer/25 Footer'

export default function Home() {
  return (
    <><div className="mx-auto flex flex-col justify-center p-9">
      <Menu />
      <div className="mx-auto justify-center md:hidden">
        <Logos />
      </div>
      <Info />
    </div><div className="py-8">
        <Footer />
      </div></>
  );
}
