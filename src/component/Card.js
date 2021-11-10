import CardItem from "./CardItem"

function Card(props) {
  return props.articles.map(article => (
    <CardItem
      urlToImage={article.urlToImage}
      title={article.title}
      description={article.description}
      url={article.url}
    />
  ))
}
export default Card
