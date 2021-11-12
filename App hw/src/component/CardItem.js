import { Card } from "react-bootstrap"

function CardItem(props) {
  const { article } = props
  return (
    <>
      <Card>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.author}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> {article.publishedAt}</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default CardItem
