import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
function CardItem(props) {
  return (
    <Card style={{ width: "700px" }} className="mx-auto mt-5">
      <Card.Img variant="top" src={props.urlToImage} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <a href="{article.url}">{props.url}</a>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default CardItem
