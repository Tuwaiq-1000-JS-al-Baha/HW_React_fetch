import { Card } from "react-bootstrap"

function UserItem(props) {
  const { User } = props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={User.avatar} />
      <Card.Body>
        <Card.Text>{User.first_name}</Card.Text>
        <Card.Text>{User.last_name}</Card.Text>
        <Card.Text>{User.email}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserItem
