
function NewsItem(props) {
  return (
    <div>
      <h3>{props.news.title}</h3>
      <img src={props.news.image} width="440px" />
      <p>{props.news.description}</p>
    </div>
  )
}

export default NewsItem



