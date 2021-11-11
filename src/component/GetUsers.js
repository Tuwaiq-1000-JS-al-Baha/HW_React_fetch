
function GetUsers(props) {
  return (
    <>
      {props.User.map(user => (
        <div>
          <img src={user.avatar} alt="" />
          <h4>
            {user.first_name} 
            {' '}
            {user.last_name}
          </h4>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}

export default GetUsers
