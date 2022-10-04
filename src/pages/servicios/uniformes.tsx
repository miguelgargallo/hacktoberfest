import type { NextPage } from 'next'

import Menu from '../../components/common/01 Head/06 Menu'
import Info from '../../components/uncommon/02 Services/06 Uniformes/02 Body/04 info/info'
import Images from '../../components/uncommon/02 Services/06 Uniformes/02 Body/06 Images'
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
      <Images />
    </div><div className="py-8">
        <Footer />
      </div></>
  );
}
