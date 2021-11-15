import "../../assets/css/card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} className={props.img} alt="" />
            <h3>{props.content}</h3>
            <button>Know more</button>
        </div>
    )
}

export default Card;