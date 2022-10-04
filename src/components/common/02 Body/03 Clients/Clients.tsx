import Grupos1 from '../06 Tarjetas/Grupos1';
import Grupos2 from '../06 Tarjetas/Grupos2';
import Grupos3 from '../06 Tarjetas/Grupos3';
import Grupos4 from '../06 Tarjetas/Grupos4';

export default function Clients() {
  return (
    <div className="snap-x flex snap-mandatory h-96 mx-auto overflow-scroll hidden md:inline">
    <div className="snap-start flex-shrink-0 h-screen flex itmes-center justify-center text-8xl"><Grupos1 /></div>
    <div className="snap-start flex-shrink-0 h-screen flex itmes-center justify-center text-8xl"><Grupos2 /></div>
    <div className="snap-start flex-shrink-0 h-screen flex itmes-center justify-center text-8xl"><Grupos3 /></div>
    <div className="snap-start flex-shrink-0 h-screen flex itmes-center justify-center text-8xl"><Grupos4 /></div>
    </div>
  )
}
