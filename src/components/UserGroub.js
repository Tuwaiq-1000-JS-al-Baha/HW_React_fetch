import UserItem from "./UserItem"

function UserGroub(props) {
  const { Users } = props
  return (
    <>
      {Users.map(User => (
        <UserItem User={User} />
      ))}
    </>
  )
}

export default UserGroub
