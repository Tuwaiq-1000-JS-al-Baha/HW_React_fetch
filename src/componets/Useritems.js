function Useritems(props) {
  return (
    <div class="Card">
      <img src={props.user.avatar} alt="avatar" />
      <h3>
        {props.user.first_name} {props.user.last_name}
      </h3>
      <h4>{props.user.email}</h4>
    </div>
  )
}

export default Useritems
