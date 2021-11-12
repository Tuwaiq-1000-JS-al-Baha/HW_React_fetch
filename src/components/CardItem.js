import { CardGroup, Card } from "react-bootstrap"

function CardItem(props) {
  const { user } = props

  return (
    <>
      {props.users.map(user => (
        <Card style={{ width: "20rem" }} className="d-block mx-auto mt-5">
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title> FirstName:{user.first_name}</Card.Title>
            <Card.Title>LastName:{user.last_name}</Card.Title>
            <Card.Text>Email:{user.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default CardItem
