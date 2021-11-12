import { Card, CardGroup } from "react-bootstrap"

function Cards(props) {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Title className="title">
            <strong>{props.New.title}</strong>
          </Card.Title>
          <Card.Body>
            <Card.Img variant="top" src={props.New.urlToImage} />
            <Card.Text>{props.New.description}</Card.Text>
            <Card.Text>{props.New.author}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}

export default Cards
