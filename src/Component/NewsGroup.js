import { Card, CardGroup, Button } from "react-bootstrap"
function NewsGroup(props) {
  return (
    <>
      <CardGroup>
        <Card style={{ width: "16rem" }}>
          <Card.Header>{props.New.title}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={props.New.urlToImage} />
            <Card.Text>{props.New.author}</Card.Text>
            <Card.Text>{props.New.description}</Card.Text>
            <Card.Text>{props.New.content}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-primary">Download</Button>{" "}
          </Card.Footer>
        </Card>
      </CardGroup>
      )
    </>
  )
}

export default NewsGroup
