import picachu from  "../assets/img/picachu.png"
import "../assets/css/home.css"

export default function Home() {
  return (
    <div id="Home">
      <h1 className="h1-home">Bienvenido maestro pokemon</h1>
      <img className="imagen-picachu"  src={picachu} alt="imagen de picachu" />
    </div>
  );
}
