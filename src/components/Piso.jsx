import Pecas from "./Pecas"
import "./piso.css"
export default function Piso(props){

    return(
        <div className="superficie">
            <Pecas preto={props.preto}/>
            <Pecas preto={!props.preto}/>
            <Pecas preto={props.preto}/>
            <Pecas preto={!props.preto}/>
            <Pecas preto={props.preto}/>
            <Pecas preto={!props.preto}/>
            <Pecas preto={props.preto}/>
            <Pecas preto={!props.preto}/>
        </div>
    )
}