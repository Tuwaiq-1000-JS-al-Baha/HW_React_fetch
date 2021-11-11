function NewItem(props) {
  return (
    <div>
      <h2>{props.New.author}</h2>
      <h5>{props.New.title}</h5>
      <p>{props.New.description}</p>
      <img src={props.New.urlToImage} height="200px" />
    </div>
  )
}

export default NewItem
