import './index.css'

const Card = props => {
  const {cardsList} = props

  return cardsList.map(item => (
    <li key={item.id} className={`${item.className} card`}>
      <h1 className="heading">{item.title}</h1>
      <p className="para">{item.description}</p>
      <div className="img-container">
        <img alt={item.title} src={item.imgUrl} className="img" />
      </div>
    </li>
  ))
}

export default Card
