import Pecas from "./components/Pecas";
import Piso from "./components/Piso";
import "./App.css"
export default function App(){

  return(
    <div className="App">
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
      >XADREZ</h1>
      <Piso/>
      <Piso preto/>
      <Piso />
      <Piso preto/>
      <Piso/>
      <Piso preto/>
      <Piso />
      <Piso preto/>
      
      <h2
      style={{
        display: "flex",
        justifyContent: "center",
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
      >XADREZ</h2>
    </div>
  )
}