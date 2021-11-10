import { Card, CardGroup } from "react-bootstrap"

function Cards(props) {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={props.New.urlToImage}/>
          <Card.Body>
            <Card.Title>{props.New.title}</Card.Title>
            <Card.Text>{props.New.description}</Card.Text>
            <Card.Text>{props.New.author}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}

export default Cards