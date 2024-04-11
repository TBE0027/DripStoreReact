import "./Flyer.css"
import { AiFillFire } from "react-icons/ai";

function Flyer() {
    return(
        <div className="Flyer">
            <div className="texto">
                <h5  className="melhoresOfertas">Melhores ofertas personalizadas</h5>
                <h1>Queima de</h1>
                <h1> estoque Nike<AiFillFire /></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Voluptatem quod iure quae repellat corrupti.</p>
                <button className="botao">Ver ofertas</button>
            </div>
            <div className="divImagem">
                <img className="imagem" src="../6d839d9bc81eba71990cf69a20c77364.png" alt="" />
            </div>
        </div>
    )
}

export default Flyer