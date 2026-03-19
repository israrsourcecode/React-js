import './Card.css'
const Card = (props) => {

    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.detail}</p>
            <button onClick={() => {
                props.deleteTask(props.index)
            }}>Delete Node</button>
        </div>
    )
}

export default Card
