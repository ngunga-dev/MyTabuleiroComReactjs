import Pecas from "./components/Pecas";
import Piso from "./components/Piso";

export default function App(){

  return(
    <div>
      <h1
      style={{

        backgroundColor:"#000",
        fontFamily:"Helvetica",
        borderColor:"#ddd",
        border: "5px",
        borderRadius:"5px",
        fontSize:"50px",
        alignItems:"center",
        textAlign:"center",
        fontWeight:"bold",
        color:"#fff",
        padding: "10px",
        margin: "10px"
      }}
      >MY TABULEIRO</h1>
      <Piso/>
      <Piso preto/>
      <Piso />
      <Piso preto/>
      <Piso/>
      <Piso preto/>
      <Piso />
      <Piso preto/>
      
    </div>
  )
}