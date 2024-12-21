import "./card.css"

function Card(props){
    return (
        <div className="bordas">
            <div className="img">
                <img src={props.foto} alt="foto de alguem" />
            </div>
            <div className="title">
                <h2>{props.titulo}</h2>
            </div>
            <div className="about">
                <p>{props.sobre}</p>
            </div>
            <div className="button">Contactar</div>
        </div>
    )
}

export default Card