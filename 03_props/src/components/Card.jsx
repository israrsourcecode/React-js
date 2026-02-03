
const Card = (props) => {
    
  return (
      <div className="card">
        <img src={props.url} alt="" />
        <h1>{props.user}</h1>
        <p>{props.para}</p>
        <button>
          View
        </button>
      </div>
    
  )
}

export default Card
