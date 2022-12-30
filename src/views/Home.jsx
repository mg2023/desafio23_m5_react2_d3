import picachu from  "../assets/img/picachu.png"
import "../assets/css/home.css"

export default function Home() {
  return (
    <div id="Home">
      <h1 style={{textAlign: "center"}}>Bienvenido maestro pokemon</h1>
      <img className="imagen-picachu"  src={picachu} />
    </div>
  );
}
